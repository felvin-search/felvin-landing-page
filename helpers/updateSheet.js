import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://xwipmdigwgdkbalmnjcc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3aXBtZGlnd2dka2JhbG1uamNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMyMzMyNjIsImV4cCI6MTk2ODgwOTI2Mn0.oJP6CZRyQiRtq7WA3RQytv-Q_3nhSuZuW5fs2ioBbn8"
);

const SubmitEmail = async (email) => {
  console.log(email);
  const { data, error } = await supabase
    .from("waitlist")
    .insert({ email: email });
  console.log(data, error);
};

export default SubmitEmail;
