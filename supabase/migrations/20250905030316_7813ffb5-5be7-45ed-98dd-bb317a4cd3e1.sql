-- Create schools table with comprehensive fields
CREATE TABLE public.schools (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    contact BIGINT NOT NULL,
    image TEXT,
    email_id TEXT NOT NULL UNIQUE,
    website_url TEXT,
    description TEXT,
    established_year INTEGER,
    student_count INTEGER,
    rating DECIMAL(2,1) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (for displaying schools)
CREATE POLICY "Schools are viewable by everyone" 
ON public.schools 
FOR SELECT 
USING (true);

-- Create policy to allow public insert (for adding schools)
CREATE POLICY "Anyone can add schools" 
ON public.schools 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow public update
CREATE POLICY "Anyone can update schools" 
ON public.schools 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_schools_updated_at
    BEFORE UPDATE ON public.schools
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for school images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('school-images', 'school-images', true);

-- Create storage policies for school images
CREATE POLICY "School images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'school-images');

CREATE POLICY "Anyone can upload school images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'school-images');

CREATE POLICY "Anyone can update school images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'school-images');