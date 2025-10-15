-- Add foreign key relationship between bookings and profiles
ALTER TABLE public.bookings
DROP CONSTRAINT IF EXISTS bookings_user_id_fkey;

ALTER TABLE public.bookings
ADD CONSTRAINT bookings_user_id_fkey 
FOREIGN KEY (user_id) 
REFERENCES public.profiles(id) 
ON DELETE CASCADE;