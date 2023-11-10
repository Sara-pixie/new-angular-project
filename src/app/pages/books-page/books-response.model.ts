export interface SearchBooksResponse {
  kind: string;
  totalItems: number;
  items: SearchBooksResponseItem[];
}

// see this page for properties details https://developers.google.com/books/docs/v1/reference/volumes#resource
export interface SearchBooksResponseItem {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  saleInfo: BookItemSaleInfo;
  searchInfo: BookItemSearckInfo;
  accessInfo: BookItemAccessInfo;
  volumeInfo: BookValumeInfo;
}

export interface BookItemSaleInfo {
  country: string;
  isEbook?: boolean;
  saleability?: string; // "NOT_FOR_SALE"|?
}
export interface BookItemSearckInfo {
  textSnippet: string;
}
export interface BookItemAccessInfo {
  country: string;
  viewability?: string; // "NO_PAGES"|"PARTIAL"|?
  embeddable?: boolean;
  publicDomain?: boolean;
  textToSpeechPermission?: string; // "ALLOWED"|"ALLOWED_FOR_ACCESSIBILITY"|?
  epub: BookAvailability;
  pdf: BookAvailability;
  webReaderLink?: string;
  accessViewStatus: string; // "NONE"|"SAMPLE"|?
  quoteSharingAllowed?: boolean;
}
export interface BookAvailability {
  isAvailable: boolean;
}
export interface BookValumeInfo {
  title: string;
  subtitle?: string;
  authors: string[];
  publisher: string;
  publishedDate: string; //"2000-09"
  description: string;
  pageCount?: number;
  printType?: string; //"BOOK"|?
  categories?: string[];
  maturityRating: string; // "NOT_MATURE"|?
  allowAnonLogging: boolean,
  contentVersion: string,
  language?: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  industryIdentifiers?: BookIndustryIdentifier[];
  readingModes: {
    text: boolean;
    image: boolean;
  };
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
}
export interface BookIndustryIdentifier {
  type: string;
  identifier: string;
}
