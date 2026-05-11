const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://oizhlnhojsdrqpgwxvcu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pemhsbmhvanNkcnFwZ3d4dmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MDQ5NzUsImV4cCI6MjA5MDI4MDk3NX0.Rdom_K6gbdY9VdzyrshuEh2aXi86q-7yshKyqxpbafM'
);

async function test() {
  const { data, error } = await supabase.from('notifications').select('*').limit(1);
  console.log("Check if we can select notifications:", error || "Yes");
}

test();
