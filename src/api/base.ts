export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
}

export enum HttpHeader {
  // 일반 헤더 (General Headers)
  CACHE_CONTROL = 'Cache-Control',
  CONNECTION = 'Connection',
  DATE = 'Date',
  PRAGMA = 'Pragma',
  TRAILER = 'Trailer',
  TRANSFER_ENCODING = 'Transfer-Encoding',
  UPGRADE = 'Upgrade',
  VIA = 'Via',
  WARNING = 'Warning',

  // 요청 헤더 (Request Headers)
  ACCEPT = 'Accept',
  ACCEPT_CHARSET = 'Accept-Charset',
  ACCEPT_ENCODING = 'Accept-Encoding',
  ACCEPT_LANGUAGE = 'Accept-Language',
  AUTHORIZATION = 'Authorization',
  REFRESH_TOKEN = 'X-Auth-Refresh-Token',
  EXPECT = 'Expect',
  FROM = 'From',
  HOST = 'Host',
  IF_MATCH = 'If-Match',
  IF_MODIFIED_SINCE = 'If-Modified-Since',
  IF_NONE_MATCH = 'If-None-Match',
  IF_RANGE = 'If-Range',
  IF_UNMODIFIED_SINCE = 'If-Unmodified-Since',
  MAX_FORWARDS = 'Max-Forwards',
  PROXY_AUTHORIZATION = 'Proxy-Authorization',
  RANGE = 'Range',
  REFERER = 'Referer',
  TE = 'TE',
  USER_AGENT = 'User-Agent',

  // 응답 헤더 (Response Headers)
  ACCEPT_RANGES = 'Accept-Ranges',
  AGE = 'Age',
  ETAG = 'ETag',
  LOCATION = 'Location',
  PROXY_AUTHENTICATE = 'Proxy-Authenticate',
  RETRY_AFTER = 'Retry-After',
  SERVER = 'Server',
  VARY = 'Vary',
  WWW_AUTHENTICATE = 'WWW-Authenticate',

  // 엔티티 헤더 (Entity Headers)
  CONTENT_ENCODING = 'Content-Encoding',
  CONTENT_LANGUAGE = 'Content-Language',
  CONTENT_LENGTH = 'Content-Length',
  CONTENT_LOCATION = 'Content-Location',
  CONTENT_MD5 = 'Content-MD5', // Deprecated
  CONTENT_RANGE = 'Content-Range',
  CONTENT_TYPE = 'Content-Type',
  EXPIRES = 'Expires',
  LAST_MODIFIED = 'Last-Modified',

  // 기타 (Other Common Headers)
  SET_COOKIE = 'Set-Cookie', // 응답 헤더이지만, 중요한 사용법으로 인해 별도 분류
  COOKIE = 'Cookie', // 요청 헤더이지만, 중요한 사용법으로 인해 별도 분류
  ACCESS_CONTROL_ALLOW_ORIGIN = 'Access-Control-Allow-Origin', // CORS
  ACCESS_CONTROL_ALLOW_CREDENTIALS = 'Access-Control-Allow-Credentials',
  ACCESS_CONTROL_ALLOW_HEADERS = 'Access-Control-Allow-Headers',
  ACCESS_CONTROL_ALLOW_METHODS = 'Access-Control-Allow-Methods',
  ACCESS_CONTROL_EXPOSE_HEADERS = 'Access-Control-Expose-Headers',
  ACCESS_CONTROL_MAX_AGE = 'Access-Control-Max-Age',
  ACCESS_CONTROL_REQUEST_HEADERS = 'Access-Control-Request-Headers',
  ACCESS_CONTROL_REQUEST_METHOD = 'Access-Control-Request-Method',
  ORIGIN = 'Origin',
  X_FORWARDED_FOR = 'X-Forwarded-For',
  X_REQUESTED_WITH = 'X-Requested-With', // 주로 AJAX 요청 식별
  DNT = 'DNT', // Do Not Track
}

export enum HttpStatus {
  // 1xx Informational
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102,
  EARLY_HINTS = 103,

  // 2xx Success
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,
  MULTI_STATUS = 207,
  ALREADY_REPORTED = 208,
  IM_USED = 226,

  // 3xx Redirection
  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  USE_PROXY = 305, // Deprecated
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,

  // 4xx Client Error
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  MISDIRECTED_REQUEST = 421,
  UNPROCESSABLE_ENTITY = 422,
  LOCKED = 423,
  FAILED_DEPENDENCY = 424,
  TOO_EARLY = 425,
  UPGRADE_REQUIRED = 426,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,

  // 5xx Server Error
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
  VARIANT_ALSO_NEGOTIATES = 506,
  INSUFFICIENT_STORAGE = 507,
  LOOP_DETECTED = 508,
  NOT_EXTENDED = 510,
  NETWORK_AUTHENTICATION_REQUIRED = 511,
}

export enum MediaType {
  // 텍스트 타입
  TEXT_PLAIN = 'text/plain',
  TEXT_HTML = 'text/html',
  TEXT_CSS = 'text/css',
  TEXT_JAVASCRIPT = 'text/javascript',

  // 애플리케이션 타입
  APPLICATION_JSON = 'application/json',
  APPLICATION_XML = 'application/xml',
  APPLICATION_PDF = 'application/pdf',
  APPLICATION_OCTET_STREAM = 'application/octet-stream', // 바이너리 데이터
  APPLICATION_X_WWW_FORM_URLENCODED = 'application/x-www-form-urlencoded',
  APPLICATION_GRAPHQL = 'application/graphql',

  // 이미지 타입
  IMAGE_JPEG = 'image/jpeg',
  IMAGE_PNG = 'image/png',
  IMAGE_GIF = 'image/gif',
  IMAGE_SVG_XML = 'image/svg+xml',
  IMAGE_WEBP = 'image/webp',

  // 오디오 타입
  AUDIO_MPEG = 'audio/mpeg',
  AUDIO_WAV = 'audio/wav',

  // 비디오 타입
  VIDEO_MP4 = 'video/mp4',
  VIDEO_WEBM = 'video/webm',

  // 멀티파트 타입
  MULTIPART_FORM_DATA = 'multipart/form-data',
  MULTIPART_BYTE_RANGES = 'multipart/byte-ranges',
}
