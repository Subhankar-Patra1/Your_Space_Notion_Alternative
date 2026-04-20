import {
  defineModuleConfig,
  StorageJSONSchema,
  StorageProviderConfig,
} from '../../base';

export interface Storages {
  avatar: {
    storage: ConfigItem<StorageProviderConfig>;
    publicPath: string;
  };
  blob: {
    storage: ConfigItem<StorageProviderConfig>;
  };
}

declare global {
  interface AppConfigSchema {
    storages: Storages;
  }
}

const s3Enabled = process.env.AFFINE_STORAGE_S3_ENABLE?.toLowerCase() === 'true';
const s3Region = process.env.AFFINE_STORAGE_S3_REGION || 'us-east-1';
const s3Endpoint =
  process.env.AFFINE_STORAGE_S3_ENDPOINT ||
  `https://s3.${s3Region}.amazonaws.com`;
const s3BucketName = process.env.AFFINE_STORAGE_S3_BUCKET_NAME || 'your.space';

const s3Credentials = {
  accessKeyId: process.env.AFFINE_STORAGE_S3_ACCESS_KEY as string,
  secretAccessKey: process.env.AFFINE_STORAGE_S3_SECRET_KEY as string,
};

const s3Config = {
  region: s3Region,
  endpoint: s3Endpoint,
  credentials: s3Credentials,
  forcePathStyle: true, // required for bucket names with dots like "your.space"
};

defineModuleConfig('storages', {
  'avatar.publicPath': {
    desc: 'The public accessible path prefix for user avatars.',
    default: s3Enabled
      ? `${s3Endpoint}/${s3BucketName}/`
      : '/api/avatars/',
  },
  'avatar.storage': {
    desc: 'The config of storage for user avatars.',
    default: {
      provider: s3Enabled ? 'aws-s3' : 'fs',
      bucket: s3BucketName,
      config: s3Enabled ? s3Config : { path: '~/.affine/storage' },
    },
    schema: StorageJSONSchema,
  },
  'blob.storage': {
    desc: 'The config of storage for all uploaded blobs(images, videos, etc.).',
    default: {
      provider: s3Enabled ? 'aws-s3' : 'fs',
      bucket: s3BucketName,
      config: s3Enabled ? s3Config : { path: '~/.affine/storage' },
    },
    schema: StorageJSONSchema,
  },
});