export interface User {
  id: string;
  email: string;
  username: string;
  displayName: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface APIKey {
  id: string;
  userId: string;
  name: string;
  prefix: string;
  createdAt: string;
  lastUsedAt?: string;
}

export interface Session {
  id: string;
  userId: string;
  name: string;
  description: string;
  robotType: string;
  status: "recording" | "processing" | "ready" | "archived";
  streamCount: number;
  totalSize: number;
  createdAt: string;
  updatedAt: string;
}

export interface Stream {
  id: string;
  sessionId: string;
  name: string;
  type: "video" | "lidar" | "imu" | "audio" | "pointcloud" | "other";
  format: string;
  sizeBytes: number;
  durationMs?: number;
  createdAt: string;
}

export interface AssetFile {
  id: string;
  streamId: string;
  filename: string;
  contentType: string;
  sizeBytes: number;
  storageKey: string;
  uploadedAt: string;
}

export interface Annotation {
  id: string;
  sessionId: string;
  streamId?: string;
  userId: string;
  type: "label" | "bounding_box" | "segmentation" | "text";
  data: Record<string, unknown>;
  timestampMs?: number;
  createdAt: string;
}

export interface Listing {
  id: string;
  userId: string;
  sessionId: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  tags: string[];
  downloads: number;
  rating: number;
  status: "draft" | "published" | "archived";
  createdAt: string;
}

export interface Order {
  id: string;
  buyerId: string;
  listingId: string;
  amount: number;
  currency: string;
  status: "pending" | "completed" | "refunded";
  createdAt: string;
}
