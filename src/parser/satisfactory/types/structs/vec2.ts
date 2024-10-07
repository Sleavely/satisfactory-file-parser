import { BinaryReadable } from '../../../byte/binary-readable.interface';
import { ByteWriter } from '../../../byte/byte-writer.class';


export type vec2 = {
    x: number;
    y: number;
};

export namespace vec2 {

    export const Parse = (reader: BinaryReadable): vec2 => {
        return {
            x: reader.readDouble(),
            y: reader.readDouble(),
        };
    };

    export const Serialize = (writer: ByteWriter, vec: vec2): void => {
        writer.writeDouble(vec.x);
        writer.writeDouble(vec.y);
    };

    export const ParseF = (reader: BinaryReadable): vec2 => {
        return {
            x: reader.readFloat32(),
            y: reader.readFloat32(),
        };
    };

    export const SerializeF = (writer: ByteWriter, vec: vec2): void => {
        writer.writeFloat32(vec.x);
        writer.writeFloat32(vec.y);
    };
}