/**
 * Type of the metadata returned from TokenURI of Research Object Contract
 */
export interface ResearchObjectMetadata {
  title: string
  pdf: string
  properties: {
    authors: {
      display_name: string
      url: string
    }[]
    abstract: string

    metadata: {
      doi: string
      published_date: string
    }

    artifacts: {
      type: 'code' | 'data'
      display_name: string
      url: string
      size_bytes?: number
    }[]

    replication_url: string
  }
}
