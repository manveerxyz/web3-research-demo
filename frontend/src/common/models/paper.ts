import { ResearchObjectMetadata } from 'common/http/research-object-metadata.model';

export interface Paper {
  id: number; // tokenId

  title: string;
  authors: {
    display_name: string;
    url: string;
  }[];
  abstract: string;
  pdf_url: string;
  replication_url: string;

  doi: string;
  published_date: string;

  artifacts: {
    type: 'code' | 'data';
    display_name: string;
    url: string;
    size_bytes?: number;
  }[];

  ethereum_contract_address: string;
  ipfs_uri: string;
}

export const groupArtifactsByType = (artifacts: Paper['artifacts']): { code: Paper['artifacts'], data: Paper['artifacts']} => {
  const codeArtifacts = artifacts.filter((a) => a.type === 'code');
  const dataArtifacts = artifacts.filter((a) => a.type === 'data');
  const res: any = { };
  if (codeArtifacts.length > 0) {
    res.code = codeArtifacts;
  }
  if (dataArtifacts.length > 0) {
    res.data = dataArtifacts;
  }
  return res;
};

export const parsePaperFromResearchObjectMetadata = (
  tokenId: number, ro: ResearchObjectMetadata, contractAddress: string, ipfsURI: string,
): Paper => ({
  id: tokenId,

  title: ro.title,
  authors: ro.properties.authors,
  abstract: ro.properties.abstract,
  pdf_url: ro.pdf,
  replication_url: ro.properties.replication_url,
  doi: ro.properties.metadata.doi,
  published_date: ro.properties.metadata.published_date,
  artifacts: ro.properties.artifacts,

  ethereum_contract_address: contractAddress,
  ipfs_uri: ipfsURI,
});
