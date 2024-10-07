// types & classes for convenience
export * from './parser/satisfactory/blueprint/blueprint.types';
export * from './parser/satisfactory/save/level.class';
export * from './parser/satisfactory/save/satisfactory-save';
export * from './parser/satisfactory/save/save.types';
export * from './parser/satisfactory/types/objects/SaveComponent';
export * from './parser/satisfactory/types/objects/SaveEntity';
export * from './parser/satisfactory/types/property/DataFields';
export * from './parser/satisfactory/types/property/generic/ArrayProperty';
export * from './parser/satisfactory/types/property/generic/BasicProperty';
export * from './parser/satisfactory/types/property/generic/BoolProperty';
export * from './parser/satisfactory/types/property/generic/ByteProperty';
export * from './parser/satisfactory/types/property/generic/DoubleProperty';
export * from './parser/satisfactory/types/property/generic/EnumProperty';
export * from './parser/satisfactory/types/property/generic/FloatProperty';
export * from './parser/satisfactory/types/property/generic/Int32Property';
export * from './parser/satisfactory/types/property/generic/Int64Property';
export * from './parser/satisfactory/types/property/generic/Int8Property';
export * from './parser/satisfactory/types/property/generic/MapProperty';
export * from './parser/satisfactory/types/property/generic/ObjectProperty';
export * from './parser/satisfactory/types/property/generic/SetProperty';
export * from './parser/satisfactory/types/property/generic/StrProperty';
export * from './parser/satisfactory/types/property/generic/StructProperty';
export * from './parser/satisfactory/types/property/generic/TextProperty';
export * from './parser/satisfactory/types/property/generic/Uint32Property';
export * from './parser/satisfactory/types/property/generic/Uint64Property';
export * from './parser/satisfactory/types/property/generic/Uint8Property';
export * from './parser/satisfactory/types/property/special/SpecialAnyProperty';
export * from './parser/satisfactory/types/structs/col4';
export * from './parser/satisfactory/types/structs/GUID';
export * from './parser/satisfactory/types/structs/GUIDInfo';
export * from './parser/satisfactory/types/structs/MD5Hash';
export * from './parser/satisfactory/types/structs/ObjectReference';
export * from './parser/satisfactory/types/structs/SoftObjectReference';
export * from './parser/satisfactory/types/structs/Transform';
export * from './parser/satisfactory/types/structs/vec2';
export * from './parser/satisfactory/types/structs/vec3';
export * from './parser/satisfactory/types/structs/vec4';

// should better be removed in a future update to prevent shenanigans.
export { BlueprintConfigReader, BlueprintReader } from './parser/satisfactory/blueprint/blueprint-reader';
export { BlueprintConfigWriter, BlueprintWriter } from './parser/satisfactory/blueprint/blueprint-writer';
export { SaveReader } from './parser/satisfactory/save/save-reader';
export { SaveWriter } from './parser/satisfactory/save/save-writer';
export { SaveStreamJsonStringifier } from './parser/stream/reworked/save-stream-json-stringifier';
export { SaveStreamWriter } from './parser/stream/reworked/save-stream-writer.class';

// errors
export * from './parser/error/parser.error';

// facade
export { Parser } from './parser/parser';
export { ReadableStreamParser } from './parser/stream/reworked/readable-stream-parser';


// edit
export * from './parser/satisfactory/edit/edit-constants';
