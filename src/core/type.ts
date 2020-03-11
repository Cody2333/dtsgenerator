import { SourceFile } from 'typescript';
import SchemaId from './schemaId';
import { JsonSchemaOrg as JsonSchemaOrgV4 } from './jsonSchemaDraft04';
import { JsonSchemaOrg as JsonSchemaOrgV7 } from './jsonSchemaDraft07';

export type JsonSchema = JsonSchemaOrgV4.Draft04.Schema | JsonSchemaOrgV7.Draft07.Schema;
export type JsonSchemaObject = JsonSchemaOrgV4.Draft04.Schema | JsonSchemaOrgV7.Draft07.SchemaObject;

export type SchemaType = 'Draft04' | 'Draft07';

export interface Schema {
    type: SchemaType;
    openApiVersion?: 2 | 3;
    id: SchemaId;
    content: JsonSchema;
    rootSchema?: Schema;
}

export interface PluginContext {
    option?: any;
    root: SourceFile;
    inputs: Iterator<[string, Schema]>;
}

export interface Plugin {
    meta: {
        description: string;
    };
    processor: (context: PluginContext) => SourceFile;
}