import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

const SubmitEmail = async (email) => {
  console.log(email);
  const { data, error } = await supabase
    .from("waitlist")
    .insert({ email: email });
  console.log(data, error);
};

export default SubmitEmail;
