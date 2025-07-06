import { supabase } from "../supabase/supabaseClient";

/**
 * Registers the authenticated user to a class, avoiding duplicates.
 * @param {string} classId - ID of the class to register for.
 */
export async function registerToClass(classId) {
  // Get currently logged-in user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    alert("You must be logged in to register for a class.");
    return;
  }

  // Check if the user is already registered for the class
  const { data: existing, error: fetchError } = await supabase
    .from("Registrations")
    .select("*")
    .eq("user_id", user.id)
    .eq("class_id", classId)
    .maybeSingle();

  if (fetchError) {
    console.error("Error checking registration:", fetchError);
    alert("An error occurred. Please try again.");
    return;
  }

  if (existing) {
    alert("You are already registered for this class.");
    return;
  }

  // Insert new registration
  const { error: insertError } = await supabase
    .from("Registrations")
    .insert([
      { user_id: user.id, class_id: classId }
    ]);

  if (insertError) {
    console.error("Error registering for class:", insertError);
    alert("There was an error processing your registration.");
  } else {
    alert("Successfully registered for the class!");
  }
}
