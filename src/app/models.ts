export interface Entity {
  time: number,
  annotations: [Annotation],
  lang: string,
  langConfidence: number,
  timestamp: string
}

export interface Annotation {
  start: number,
  end: number,
  spot: string,
  confidence: number,
  id: number,
  title: string,
  uri: string,
  abstract: string,
  label: string,
  categories: [string],
  image: Img
}

export interface Img {
  full: string,
  thumbnail: string
}



export interface Analysis {
  time: number,
  sentiment: Sentiments,
  lang: string,
  langConfidence: number,
  timestamp: string
}

export interface Sentiments {
  type: string,
  score: number
}

export interface Similarity {
  time: number,
  similarity: number,
  lang: string,
  langConfidence: number,
  timestamp: string
}

export interface Language {
  time: number,
  detectedLangs: [Langs],
  timestamp: string
}

export interface Langs {
  lang: string,
  confidence: number
}

