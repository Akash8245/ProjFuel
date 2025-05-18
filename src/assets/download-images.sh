#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p src/assets

# Download hero image - Modern AI/Technology visualization
curl -o src/assets/hero-tech.jpg "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1920&auto=format&fit=crop"

# Download team image
curl -o src/assets/team.jpg "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"

# Download office image
curl -o src/assets/office.jpg "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"

# Download tech image
curl -o src/assets/tech.jpg "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"

# Download additional tech images for floating cards
curl -o src/assets/ai-tech.jpg "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop"
curl -o src/assets/cloud-tech.jpg "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&auto=format&fit=crop"
curl -o src/assets/dev-tech.jpg "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"

echo "Downloaded all images successfully" 