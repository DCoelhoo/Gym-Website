import { supabase } from "../supabase/supabaseClient";

export async function registerToClass(classId) {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    alert("Precisas de estar autenticado para te inscreveres.");
    return;
  }

  const { error } = await supabase
    .from("Registrations")
    .insert([
      { user_id: user.id, class_id: classId }
    ]);

  if (error) {
    console.error("Erro ao registar:", error);
    alert("Erro ao fazer o registo.");
  } else {
    alert("Inscrição feita com sucesso!");
  }
}
