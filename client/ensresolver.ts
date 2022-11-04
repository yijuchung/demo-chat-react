/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export interface ResolveAddressRequest {
  name: string;
  asset: string;
}

export interface ResolveAddressResponse {
  address: string;
  avatarURL: string;
  homoglyphWarning: ResolveAddressResponse_HomoglyphWarning | undefined;
}

export interface ResolveAddressResponse_HomoglyphWarning {
  containsHomoglyphs: boolean;
  homoglyphs: ResolveAddressResponse_HomoglyphWarning_Homoglyph[];
}

export interface ResolveAddressResponse_HomoglyphWarning_Homoglyph {
  index: number;
  homoglyph: string;
  looksLike: string;
}

export interface ReverseResolveDomainRequest {
  address: string;
  asset: string;
}

export interface ReverseResolveDomainResponse {
  name: string;
}

/**
 * github.cbhq.net/identity/subdomain-did-service/gen/go/coinbase/subdomain_did_service/common
 * Eventually, we want to just import the property list for subdomain did.
 * But since the sanitization of the text records should be treated differently, a separate copy
 * of Property for L1 ENS is created.
 */
export interface TextRecords {
  email: string;
  url: string;
  description: string;
  notice: string;
  keywords: string;
  github: string;
  discord: string;
  reddit: string;
  twitter: string;
  /** content field is immutable */
  content: string;
  avatar: string;
}

export interface ReverseResolveL1EnsDomainRequest {
  ethereumAddress: string;
}

export interface ReverseResolveL1EnsDomainResponse {
  name: string;
  avatarUrl: string;
}

export interface ReverseResolveL1EnsDomainWithTextRecordsRequest {
  ethereumAddress: string;
  propKeys: string[];
}

export interface ReverseResolveL1EnsDomainWithTextRecordsResponse {
  address: string;
  textRecords: TextRecords | undefined;
}

export interface ResolveL1EnsDomainWithTextRecordsRequest {
  ethereumNamespace: string;
  propKeys: string[];
}

export interface ResolveL1EnsDomainWithTextRecordsResponse {
  address: string;
  textRecords: TextRecords | undefined;
}

function createBaseResolveAddressRequest(): ResolveAddressRequest {
  return { name: "", asset: "" };
}

export const ResolveAddressRequest = {
  encode(message: ResolveAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResolveAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolveAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResolveAddressRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: ResolveAddressRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResolveAddressRequest>, I>>(object: I): ResolveAddressRequest {
    const message = createBaseResolveAddressRequest();
    message.name = object.name ?? "";
    message.asset = object.asset ?? "";
    return message;
  },
};

function createBaseResolveAddressResponse(): ResolveAddressResponse {
  return { address: "", avatarURL: "", homoglyphWarning: undefined };
}

export const ResolveAddressResponse = {
  encode(message: ResolveAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.avatarURL !== "") {
      writer.uint32(18).string(message.avatarURL);
    }
    if (message.homoglyphWarning !== undefined) {
      ResolveAddressResponse_HomoglyphWarning.encode(message.homoglyphWarning, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResolveAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolveAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.avatarURL = reader.string();
          break;
        case 3:
          message.homoglyphWarning = ResolveAddressResponse_HomoglyphWarning.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResolveAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      avatarURL: isSet(object.avatarURL) ? String(object.avatarURL) : "",
      homoglyphWarning: isSet(object.homoglyphWarning)
        ? ResolveAddressResponse_HomoglyphWarning.fromJSON(object.homoglyphWarning)
        : undefined,
    };
  },

  toJSON(message: ResolveAddressResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.avatarURL !== undefined && (obj.avatarURL = message.avatarURL);
    message.homoglyphWarning !== undefined && (obj.homoglyphWarning = message.homoglyphWarning
      ? ResolveAddressResponse_HomoglyphWarning.toJSON(message.homoglyphWarning)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResolveAddressResponse>, I>>(object: I): ResolveAddressResponse {
    const message = createBaseResolveAddressResponse();
    message.address = object.address ?? "";
    message.avatarURL = object.avatarURL ?? "";
    message.homoglyphWarning = (object.homoglyphWarning !== undefined && object.homoglyphWarning !== null)
      ? ResolveAddressResponse_HomoglyphWarning.fromPartial(object.homoglyphWarning)
      : undefined;
    return message;
  },
};

function createBaseResolveAddressResponse_HomoglyphWarning(): ResolveAddressResponse_HomoglyphWarning {
  return { containsHomoglyphs: false, homoglyphs: [] };
}

export const ResolveAddressResponse_HomoglyphWarning = {
  encode(message: ResolveAddressResponse_HomoglyphWarning, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.containsHomoglyphs === true) {
      writer.uint32(8).bool(message.containsHomoglyphs);
    }
    for (const v of message.homoglyphs) {
      ResolveAddressResponse_HomoglyphWarning_Homoglyph.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResolveAddressResponse_HomoglyphWarning {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolveAddressResponse_HomoglyphWarning();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.containsHomoglyphs = reader.bool();
          break;
        case 3:
          message.homoglyphs.push(ResolveAddressResponse_HomoglyphWarning_Homoglyph.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResolveAddressResponse_HomoglyphWarning {
    return {
      containsHomoglyphs: isSet(object.containsHomoglyphs) ? Boolean(object.containsHomoglyphs) : false,
      homoglyphs: Array.isArray(object?.homoglyphs)
        ? object.homoglyphs.map((e: any) => ResolveAddressResponse_HomoglyphWarning_Homoglyph.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ResolveAddressResponse_HomoglyphWarning): unknown {
    const obj: any = {};
    message.containsHomoglyphs !== undefined && (obj.containsHomoglyphs = message.containsHomoglyphs);
    if (message.homoglyphs) {
      obj.homoglyphs = message.homoglyphs.map((e) =>
        e ? ResolveAddressResponse_HomoglyphWarning_Homoglyph.toJSON(e) : undefined
      );
    } else {
      obj.homoglyphs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResolveAddressResponse_HomoglyphWarning>, I>>(
    object: I,
  ): ResolveAddressResponse_HomoglyphWarning {
    const message = createBaseResolveAddressResponse_HomoglyphWarning();
    message.containsHomoglyphs = object.containsHomoglyphs ?? false;
    message.homoglyphs =
      object.homoglyphs?.map((e) => ResolveAddressResponse_HomoglyphWarning_Homoglyph.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResolveAddressResponse_HomoglyphWarning_Homoglyph(): ResolveAddressResponse_HomoglyphWarning_Homoglyph {
  return { index: 0, homoglyph: "", looksLike: "" };
}

export const ResolveAddressResponse_HomoglyphWarning_Homoglyph = {
  encode(
    message: ResolveAddressResponse_HomoglyphWarning_Homoglyph,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).int32(message.index);
    }
    if (message.homoglyph !== "") {
      writer.uint32(18).string(message.homoglyph);
    }
    if (message.looksLike !== "") {
      writer.uint32(26).string(message.looksLike);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResolveAddressResponse_HomoglyphWarning_Homoglyph {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolveAddressResponse_HomoglyphWarning_Homoglyph();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.int32();
          break;
        case 2:
          message.homoglyph = reader.string();
          break;
        case 3:
          message.looksLike = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResolveAddressResponse_HomoglyphWarning_Homoglyph {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      homoglyph: isSet(object.homoglyph) ? String(object.homoglyph) : "",
      looksLike: isSet(object.looksLike) ? String(object.looksLike) : "",
    };
  },

  toJSON(message: ResolveAddressResponse_HomoglyphWarning_Homoglyph): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.homoglyph !== undefined && (obj.homoglyph = message.homoglyph);
    message.looksLike !== undefined && (obj.looksLike = message.looksLike);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResolveAddressResponse_HomoglyphWarning_Homoglyph>, I>>(
    object: I,
  ): ResolveAddressResponse_HomoglyphWarning_Homoglyph {
    const message = createBaseResolveAddressResponse_HomoglyphWarning_Homoglyph();
    message.index = object.index ?? 0;
    message.homoglyph = object.homoglyph ?? "";
    message.looksLike = object.looksLike ?? "";
    return message;
  },
};

function createBaseReverseResolveDomainRequest(): ReverseResolveDomainRequest {
  return { address: "", asset: "" };
}

export const ReverseResolveDomainRequest = {
  encode(message: ReverseResolveDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReverseResolveDomainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReverseResolveDomainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReverseResolveDomainRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: ReverseResolveDomainRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReverseResolveDomainRequest>, I>>(object: I): ReverseResolveDomainRequest {
    const message = createBaseReverseResolveDomainRequest();
    message.address = object.address ?? "";
    message.asset = object.asset ?? "";
    return message;
  },
};

function createBaseReverseResolveDomainResponse(): ReverseResolveDomainResponse {
  return { name: "" };
}

export const ReverseResolveDomainResponse = {
  encode(message: ReverseResolveDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReverseResolveDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReverseResolveDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReverseResolveDomainResponse {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: ReverseResolveDomainResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReverseResolveDomainResponse>, I>>(object: I): ReverseResolveDomainResponse {
    const message = createBaseReverseResolveDomainResponse();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseTextRecords(): TextRecords {
  return {
    email: "",
    url: "",
    description: "",
    notice: "",
    keywords: "",
    github: "",
    discord: "",
    reddit: "",
    twitter: "",
    content: "",
    avatar: "",
  };
}

export const TextRecords = {
  encode(message: TextRecords, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.notice !== "") {
      writer.uint32(34).string(message.notice);
    }
    if (message.keywords !== "") {
      writer.uint32(42).string(message.keywords);
    }
    if (message.github !== "") {
      writer.uint32(50).string(message.github);
    }
    if (message.discord !== "") {
      writer.uint32(58).string(message.discord);
    }
    if (message.reddit !== "") {
      writer.uint32(66).string(message.reddit);
    }
    if (message.twitter !== "") {
      writer.uint32(74).string(message.twitter);
    }
    if (message.content !== "") {
      writer.uint32(82).string(message.content);
    }
    if (message.avatar !== "") {
      writer.uint32(90).string(message.avatar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextRecords {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextRecords();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.notice = reader.string();
          break;
        case 5:
          message.keywords = reader.string();
          break;
        case 6:
          message.github = reader.string();
          break;
        case 7:
          message.discord = reader.string();
          break;
        case 8:
          message.reddit = reader.string();
          break;
        case 9:
          message.twitter = reader.string();
          break;
        case 10:
          message.content = reader.string();
          break;
        case 11:
          message.avatar = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TextRecords {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      url: isSet(object.url) ? String(object.url) : "",
      description: isSet(object.description) ? String(object.description) : "",
      notice: isSet(object.notice) ? String(object.notice) : "",
      keywords: isSet(object.keywords) ? String(object.keywords) : "",
      github: isSet(object.github) ? String(object.github) : "",
      discord: isSet(object.discord) ? String(object.discord) : "",
      reddit: isSet(object.reddit) ? String(object.reddit) : "",
      twitter: isSet(object.twitter) ? String(object.twitter) : "",
      content: isSet(object.content) ? String(object.content) : "",
      avatar: isSet(object.avatar) ? String(object.avatar) : "",
    };
  },

  toJSON(message: TextRecords): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.url !== undefined && (obj.url = message.url);
    message.description !== undefined && (obj.description = message.description);
    message.notice !== undefined && (obj.notice = message.notice);
    message.keywords !== undefined && (obj.keywords = message.keywords);
    message.github !== undefined && (obj.github = message.github);
    message.discord !== undefined && (obj.discord = message.discord);
    message.reddit !== undefined && (obj.reddit = message.reddit);
    message.twitter !== undefined && (obj.twitter = message.twitter);
    message.content !== undefined && (obj.content = message.content);
    message.avatar !== undefined && (obj.avatar = message.avatar);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TextRecords>, I>>(object: I): TextRecords {
    const message = createBaseTextRecords();
    message.email = object.email ?? "";
    message.url = object.url ?? "";
    message.description = object.description ?? "";
    message.notice = object.notice ?? "";
    message.keywords = object.keywords ?? "";
    message.github = object.github ?? "";
    message.discord = object.discord ?? "";
    message.reddit = object.reddit ?? "";
    message.twitter = object.twitter ?? "";
    message.content = object.content ?? "";
    message.avatar = object.avatar ?? "";
    return message;
  },
};

function createBaseReverseResolveL1EnsDomainRequest(): ReverseResolveL1EnsDomainRequest {
  return { ethereumAddress: "" };
}

export const ReverseResolveL1EnsDomainRequest = {
  encode(message: ReverseResolveL1EnsDomainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ethereumAddress !== "") {
      writer.uint32(10).string(message.ethereumAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReverseResolveL1EnsDomainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReverseResolveL1EnsDomainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethereumAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReverseResolveL1EnsDomainRequest {
    return { ethereumAddress: isSet(object.ethereumAddress) ? String(object.ethereumAddress) : "" };
  },

  toJSON(message: ReverseResolveL1EnsDomainRequest): unknown {
    const obj: any = {};
    message.ethereumAddress !== undefined && (obj.ethereumAddress = message.ethereumAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReverseResolveL1EnsDomainRequest>, I>>(
    object: I,
  ): ReverseResolveL1EnsDomainRequest {
    const message = createBaseReverseResolveL1EnsDomainRequest();
    message.ethereumAddress = object.ethereumAddress ?? "";
    return message;
  },
};

function createBaseReverseResolveL1EnsDomainResponse(): ReverseResolveL1EnsDomainResponse {
  return { name: "", avatarUrl: "" };
}

export const ReverseResolveL1EnsDomainResponse = {
  encode(message: ReverseResolveL1EnsDomainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(18).string(message.avatarUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReverseResolveL1EnsDomainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReverseResolveL1EnsDomainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.avatarUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReverseResolveL1EnsDomainResponse {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
    };
  },

  toJSON(message: ReverseResolveL1EnsDomainResponse): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReverseResolveL1EnsDomainResponse>, I>>(
    object: I,
  ): ReverseResolveL1EnsDomainResponse {
    const message = createBaseReverseResolveL1EnsDomainResponse();
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    return message;
  },
};

function createBaseReverseResolveL1EnsDomainWithTextRecordsRequest(): ReverseResolveL1EnsDomainWithTextRecordsRequest {
  return { ethereumAddress: "", propKeys: [] };
}

export const ReverseResolveL1EnsDomainWithTextRecordsRequest = {
  encode(
    message: ReverseResolveL1EnsDomainWithTextRecordsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ethereumAddress !== "") {
      writer.uint32(10).string(message.ethereumAddress);
    }
    for (const v of message.propKeys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReverseResolveL1EnsDomainWithTextRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReverseResolveL1EnsDomainWithTextRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethereumAddress = reader.string();
          break;
        case 2:
          message.propKeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReverseResolveL1EnsDomainWithTextRecordsRequest {
    return {
      ethereumAddress: isSet(object.ethereumAddress) ? String(object.ethereumAddress) : "",
      propKeys: Array.isArray(object?.propKeys) ? object.propKeys.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ReverseResolveL1EnsDomainWithTextRecordsRequest): unknown {
    const obj: any = {};
    message.ethereumAddress !== undefined && (obj.ethereumAddress = message.ethereumAddress);
    if (message.propKeys) {
      obj.propKeys = message.propKeys.map((e) => e);
    } else {
      obj.propKeys = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReverseResolveL1EnsDomainWithTextRecordsRequest>, I>>(
    object: I,
  ): ReverseResolveL1EnsDomainWithTextRecordsRequest {
    const message = createBaseReverseResolveL1EnsDomainWithTextRecordsRequest();
    message.ethereumAddress = object.ethereumAddress ?? "";
    message.propKeys = object.propKeys?.map((e) => e) || [];
    return message;
  },
};

function createBaseReverseResolveL1EnsDomainWithTextRecordsResponse(): ReverseResolveL1EnsDomainWithTextRecordsResponse {
  return { address: "", textRecords: undefined };
}

export const ReverseResolveL1EnsDomainWithTextRecordsResponse = {
  encode(
    message: ReverseResolveL1EnsDomainWithTextRecordsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.textRecords !== undefined) {
      TextRecords.encode(message.textRecords, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReverseResolveL1EnsDomainWithTextRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReverseResolveL1EnsDomainWithTextRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.textRecords = TextRecords.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReverseResolveL1EnsDomainWithTextRecordsResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      textRecords: isSet(object.textRecords) ? TextRecords.fromJSON(object.textRecords) : undefined,
    };
  },

  toJSON(message: ReverseResolveL1EnsDomainWithTextRecordsResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.textRecords !== undefined &&
      (obj.textRecords = message.textRecords ? TextRecords.toJSON(message.textRecords) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReverseResolveL1EnsDomainWithTextRecordsResponse>, I>>(
    object: I,
  ): ReverseResolveL1EnsDomainWithTextRecordsResponse {
    const message = createBaseReverseResolveL1EnsDomainWithTextRecordsResponse();
    message.address = object.address ?? "";
    message.textRecords = (object.textRecords !== undefined && object.textRecords !== null)
      ? TextRecords.fromPartial(object.textRecords)
      : undefined;
    return message;
  },
};

function createBaseResolveL1EnsDomainWithTextRecordsRequest(): ResolveL1EnsDomainWithTextRecordsRequest {
  return { ethereumNamespace: "", propKeys: [] };
}

export const ResolveL1EnsDomainWithTextRecordsRequest = {
  encode(message: ResolveL1EnsDomainWithTextRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ethereumNamespace !== "") {
      writer.uint32(10).string(message.ethereumNamespace);
    }
    for (const v of message.propKeys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResolveL1EnsDomainWithTextRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolveL1EnsDomainWithTextRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethereumNamespace = reader.string();
          break;
        case 2:
          message.propKeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResolveL1EnsDomainWithTextRecordsRequest {
    return {
      ethereumNamespace: isSet(object.ethereumNamespace) ? String(object.ethereumNamespace) : "",
      propKeys: Array.isArray(object?.propKeys) ? object.propKeys.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ResolveL1EnsDomainWithTextRecordsRequest): unknown {
    const obj: any = {};
    message.ethereumNamespace !== undefined && (obj.ethereumNamespace = message.ethereumNamespace);
    if (message.propKeys) {
      obj.propKeys = message.propKeys.map((e) => e);
    } else {
      obj.propKeys = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResolveL1EnsDomainWithTextRecordsRequest>, I>>(
    object: I,
  ): ResolveL1EnsDomainWithTextRecordsRequest {
    const message = createBaseResolveL1EnsDomainWithTextRecordsRequest();
    message.ethereumNamespace = object.ethereumNamespace ?? "";
    message.propKeys = object.propKeys?.map((e) => e) || [];
    return message;
  },
};

function createBaseResolveL1EnsDomainWithTextRecordsResponse(): ResolveL1EnsDomainWithTextRecordsResponse {
  return { address: "", textRecords: undefined };
}

export const ResolveL1EnsDomainWithTextRecordsResponse = {
  encode(message: ResolveL1EnsDomainWithTextRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.textRecords !== undefined) {
      TextRecords.encode(message.textRecords, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResolveL1EnsDomainWithTextRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolveL1EnsDomainWithTextRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.textRecords = TextRecords.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResolveL1EnsDomainWithTextRecordsResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      textRecords: isSet(object.textRecords) ? TextRecords.fromJSON(object.textRecords) : undefined,
    };
  },

  toJSON(message: ResolveL1EnsDomainWithTextRecordsResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.textRecords !== undefined &&
      (obj.textRecords = message.textRecords ? TextRecords.toJSON(message.textRecords) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResolveL1EnsDomainWithTextRecordsResponse>, I>>(
    object: I,
  ): ResolveL1EnsDomainWithTextRecordsResponse {
    const message = createBaseResolveL1EnsDomainWithTextRecordsResponse();
    message.address = object.address ?? "";
    message.textRecords = (object.textRecords !== undefined && object.textRecords !== null)
      ? TextRecords.fromPartial(object.textRecords)
      : undefined;
    return message;
  },
};

export interface ENSResolver {
  ResolveAddress(request: ResolveAddressRequest): Promise<ResolveAddressResponse>;
  ReverseResolveDomain(request: ReverseResolveDomainRequest): Promise<ReverseResolveDomainResponse>;
  ReverseResolveL1EnsDomain(request: ReverseResolveL1EnsDomainRequest): Promise<ReverseResolveL1EnsDomainResponse>;
  ReverseResolveL1EnsDomainWithTextRecords(
    request: ReverseResolveL1EnsDomainWithTextRecordsRequest,
  ): Promise<ReverseResolveL1EnsDomainWithTextRecordsResponse>;
  ResolveL1EnsDomainWithTextRecords(
    request: ResolveL1EnsDomainWithTextRecordsRequest,
  ): Promise<ResolveL1EnsDomainWithTextRecordsResponse>;
}

export class ENSResolverClientImpl implements ENSResolver {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "api.ENSResolver";
    this.rpc = rpc;
    this.ResolveAddress = this.ResolveAddress.bind(this);
    this.ReverseResolveDomain = this.ReverseResolveDomain.bind(this);
    this.ReverseResolveL1EnsDomain = this.ReverseResolveL1EnsDomain.bind(this);
    this.ReverseResolveL1EnsDomainWithTextRecords = this.ReverseResolveL1EnsDomainWithTextRecords.bind(this);
    this.ResolveL1EnsDomainWithTextRecords = this.ResolveL1EnsDomainWithTextRecords.bind(this);
  }
  ResolveAddress(request: ResolveAddressRequest): Promise<ResolveAddressResponse> {
    const data = ResolveAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResolveAddress", data);
    return promise.then((data) => ResolveAddressResponse.decode(new _m0.Reader(data)));
  }

  ReverseResolveDomain(request: ReverseResolveDomainRequest): Promise<ReverseResolveDomainResponse> {
    const data = ReverseResolveDomainRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReverseResolveDomain", data);
    return promise.then((data) => ReverseResolveDomainResponse.decode(new _m0.Reader(data)));
  }

  ReverseResolveL1EnsDomain(request: ReverseResolveL1EnsDomainRequest): Promise<ReverseResolveL1EnsDomainResponse> {
    const data = ReverseResolveL1EnsDomainRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReverseResolveL1EnsDomain", data);
    return promise.then((data) => ReverseResolveL1EnsDomainResponse.decode(new _m0.Reader(data)));
  }

  ReverseResolveL1EnsDomainWithTextRecords(
    request: ReverseResolveL1EnsDomainWithTextRecordsRequest,
  ): Promise<ReverseResolveL1EnsDomainWithTextRecordsResponse> {
    const data = ReverseResolveL1EnsDomainWithTextRecordsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReverseResolveL1EnsDomainWithTextRecords", data);
    return promise.then((data) => ReverseResolveL1EnsDomainWithTextRecordsResponse.decode(new _m0.Reader(data)));
  }

  ResolveL1EnsDomainWithTextRecords(
    request: ResolveL1EnsDomainWithTextRecordsRequest,
  ): Promise<ResolveL1EnsDomainWithTextRecordsResponse> {
    const data = ResolveL1EnsDomainWithTextRecordsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResolveL1EnsDomainWithTextRecords", data);
    return promise.then((data) => ResolveL1EnsDomainWithTextRecordsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
