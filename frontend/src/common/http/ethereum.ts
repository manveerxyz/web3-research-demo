import { Paper, parsePaperFromResearchObjectMetadata } from 'common/models/paper';
import { BigNumber, ethers } from 'ethers';

import researchObjectAbi from 'json/research-object-contract.abi.json';
import IPFS from './ipfs';

class Ethereum {
  private provider: ethers.providers.BaseProvider;

  private papersContract: ethers.Contract;

  constructor() {
    this.provider = ethers.providers.getDefaultProvider(process.env.REACT_APP_ETHEREUM_NETWORK_URL);

    if (!process.env.REACT_APP_RESEARCH_OBJECT_CONTRACT_ADDRESS) {
      throw new Error('REACT_APP_RESEARCH_OBJECT_CONTRACT_ADDRESS is not set');
    }

    this.papersContract = new ethers.Contract(
      process.env.REACT_APP_RESEARCH_OBJECT_CONTRACT_ADDRESS,
      researchObjectAbi,
      this.provider,
    );
  }

  async getPapers(ids: number[]): Promise<Paper[]> {
    // fetch IPFS addresses for paper data
    const tokenURIs = await Promise.all(ids.map(
      async (tokenId) => this.papersContract.tokenURI(tokenId),
    ));
    // fetch data from IPFS
    const metadata = await Promise.all(tokenURIs.map((uri) => IPFS.fetch(uri)));

    return metadata.map(
      (m, i) => parsePaperFromResearchObjectMetadata(
        i, m, this.papersContract.address, tokenURIs[i],
      ),
    );
  }

  async getPaperById(tokenId: number): Promise<Paper> {
    // fetch IPFS addresses for paper data
    const uri = await this.papersContract.tokenURI(tokenId);
    // fetch data from IPFS
    const metadata = await IPFS.fetch(uri);

    return parsePaperFromResearchObjectMetadata(
      tokenId, metadata, this.papersContract.address, uri,
    );
  }

  async getCitations(tokenId: number): Promise<number[]> {
    const res = await this.papersContract.getCitations(tokenId);
    return res.map((r: BigNumber) => r.toNumber());
  }
}

export default new Ethereum();
