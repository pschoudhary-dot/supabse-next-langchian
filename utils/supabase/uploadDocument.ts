// utils/supabase/uploadDocument.ts
import { supabase } from './supabaseClient';

export async function uploadDocument(file: File) {
  // Get the current session to retrieve user info
  const { data: { session } } = await supabase.auth.getSession();
  if (!session || !session.user) {
    throw new Error('User not logged in');
  }

  const userId = session.user.id;
  // Optionally, structure the file path with the user id
  const filePath = `${userId}/${Date.now()}_${file.name}`;

  const { data, error } = await supabase.storage
    .from('documents')
    .upload(filePath, file);

  if (error) {
    throw error;
  }

  return data;
}
