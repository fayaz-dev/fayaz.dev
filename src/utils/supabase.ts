import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      subscribers: {
        Row: {
          id: string;
          email: string;
          joined_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          joined_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          joined_at?: string;
        };
      };
      comments: {
        Row: {
          id: string;
          post_slug: string;
          user_id: string;
          content: string;
          parent_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          post_slug: string;
          user_id: string;
          content: string;
          parent_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          post_slug?: string;
          user_id?: string;
          content?: string;
          parent_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      ama_questions: {
        Row: {
          id: string;
          question: string;
          answer: string | null;
          is_published: boolean;
          created_at: string;
          answered_at: string | null;
        };
        Insert: {
          id?: string;
          question: string;
          answer?: string | null;
          is_published?: boolean;
          created_at?: string;
          answered_at?: string | null;
        };
        Update: {
          id?: string;
          question?: string;
          answer?: string | null;
          is_published?: boolean;
          created_at?: string;
          answered_at?: string | null;
        };
      };
    };
  };
};