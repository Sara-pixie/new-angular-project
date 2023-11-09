export interface SearchBooksRequest {
  q: string; // querry string
  download?: SearchBooksDownload; // Restrict to volumes by download availability.
  filter?: SearchBooksFilter; // Filter search results.
  langRestrict?: string; // Restrict results to books with this language code.
  libraryRestrict?: SearchBooksLibraryRestrict; // Restrict search to this user's library.
  maxResults?: number; // Maximum number of results to return. Acceptable values are 0 to 40, inclusive.
  orderBy?: SearchBooksOrderBy; // Sort search results.
  partner?: string; // Restrict and brand results for partner ID.
  printType?: SearchBooksPrintType; // Restrict to books or magazines.
  projection?: SearchBooksProjection; // Restrict information returned to a set of selected fields.
  showPreorders?: boolean; // Set to true to show books available for preorder. Defaults to false.
  source?: string; // String to identify the originator of this request.
  startIndex?: number; // Index of the first result to return (starts at 0)
}


export enum SearchBooksDownload {
  EPUB = "epub", // All volumes with epub.
}
export enum SearchBooksFilter {
  EBOOKS = "ebooks", // All Google eBooks.
  FREE_EBOOKS = "free-ebooks", // Google eBook with full volume text viewability.
  FULL = "full", // Public can view entire volume text.
  PAID_EBOOKS = "paid-ebooks", // Google eBook with a price.
  PARTIAL = "partial", // Public able to see parts of text.
}
export enum SearchBooksLibraryRestrict {
  MY_LIBRARY = "my-library", // Restrict to the user's library, any shelf.
  NO_RESTRICT = "no-restrict", // Do not restrict based on user's library.
}
export enum SearchBooksOrderBy {
  NEWEST = "newest", // Most recently published.
  RELEVANCE = "relevance", // Relevance to search terms
}
export enum SearchBooksPrintType {
  ALL = "all", // All volume content types.
  BOOKS = "books", // Just books.
  MAGAZINES = "magazines", // Just magazines.
}
export enum SearchBooksProjection {
  FULL = "full", // Includes all volume data.
  LITE = "lite", // Includes a subset of fields in volumeInfo and accessInfo.
}
