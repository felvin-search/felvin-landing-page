import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://ywzwnkrqhejsufwipyft.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3endua3JxaGVqc3Vmd2lweWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMxMjU3MDEsImV4cCI6MTk2ODcwMTcwMX0.ra_XDLMf16uRKnsFjD6PNAPjg042UOAoSLE-JqPuK7Q"
);

const SubmitEmail = async (email) => {
  console.log(email);
  const { data, error } = await supabase
    .from("waitlist")
    .insert({ Email: email });
  console.log(data, error);
};

export default SubmitEmail;
