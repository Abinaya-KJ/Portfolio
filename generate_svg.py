
import random
import math

def generate_radial_circuit_svg(filename="public/background-circuit-radial.svg"):
    width = 1920
    height = 1080
    cx, cy = width / 2, height / 2
    
    # Pastel colors
    colors = ["#b8c1ec", "#e0c3fc", "#90f1ef", "#eebbc3"]
    
    svg_content = [f'<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">']
    svg_content.append(f'<defs><radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="0%" stop-color="#ffffff" stop-opacity="0.2"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0"/></radialGradient></defs>')
    svg_content.append(f'<rect width="100%" height="100%" fill="url(#glow)" />')

    # Generate radial lines
    for i in range(0, 360, 5):  # Every 5 degrees
        if random.random() > 0.6: continue # Skip some lines
        
        angle_rad = math.radians(i)
        start_dist = random.randint(100, 300)
        end_dist = random.randint(400, 900)
        
        x1 = cx + math.cos(angle_rad) * start_dist
        y1 = cy + math.sin(angle_rad) * start_dist
        x2 = cx + math.cos(angle_rad) * end_dist
        y2 = cy + math.sin(angle_rad) * end_dist
        
        color = random.choice(colors)
        width_line = random.choice([1, 2])
        opacity = random.uniform(0.1, 0.4)
        
        # Main radial line
        svg_content.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{width_line}" opacity="{opacity}" stroke-linecap="round"/>')
        
        # Nodes at ends
        svg_content.append(f'<circle cx="{x2}" cy="{y2}" r="{width_line + 1}" fill="{color}" opacity="{opacity + 0.2}"/>')
        
        # Occasional branches or perpendicular lines
        if random.random() > 0.7:
             perp_len = random.randint(20, 60)
             # Perpendicular direction
             p_x = x2 + math.cos(angle_rad + math.pi/2) * perp_len
             p_y = y2 + math.sin(angle_rad + math.pi/2) * perp_len
             svg_content.append(f'<line x1="{x2}" y1="{y2}" x2="{p_x}" y2="{p_y}" stroke="{color}" stroke-width="{width_line}" opacity="{opacity}" stroke-linecap="round"/>')
             svg_content.append(f'<circle cx="{p_x}" cy="{p_y}" r="{width_line}" fill="{color}" opacity="{opacity + 0.2}"/>')

    svg_content.append('</svg>')
    
    with open(filename, "w") as f:
        f.write("\n".join(svg_content))

def generate_light_mode_svg(filename="public/background-circuit-radial-light.svg"):
    width = 1920
    height = 1080
    cx, cy = width / 2, height / 2
    
    # Dark Pink Tones for Light Mode (Dusty Pink, Muted Rose, Soft Magenta)
    colors = [
        "#9F2B68", # Deep Amaranth
        "#C71585", # Medium Violet Red
        "#D87093", # Pale Violet Red (Dusty Pink)
        "#880E4F", # Dark Pink
        "#AD1457", # Pink
        "#B76E79"  # Muted Rose
    ]
    
    svg_content = [f'<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">']
    # No white glow for light mode, maybe a subtle dark fade? Or just transparency.
    # Let's add a very subtle dark radial gradient at center to give depth, but very light.
    svg_content.append(f'<defs><radialGradient id="glow-light" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="0%" stop-color="#000000" stop-opacity="0.05"/><stop offset="100%" stop-color="#000000" stop-opacity="0"/></radialGradient></defs>')
    svg_content.append(f'<rect width="100%" height="100%" fill="url(#glow-light)" />')

    # Generate radial lines
    for i in range(0, 360, 5):  # Every 5 degrees
        if random.random() > 0.6: continue # Skip some lines
        
        angle_rad = math.radians(i)
        start_dist = random.randint(100, 300)
        end_dist = random.randint(400, 900)
        
        x1 = cx + math.cos(angle_rad) * start_dist
        y1 = cy + math.sin(angle_rad) * start_dist
        x2 = cx + math.cos(angle_rad) * end_dist
        y2 = cy + math.sin(angle_rad) * end_dist
        
        color = random.choice(colors)
        width_line = random.uniform(1.5, 3) # Thicker lines for visibility
        opacity = random.uniform(0.4, 0.8) # Higher opacity for visibility
        
        # Main radial line
        svg_content.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{width_line}" opacity="{opacity}" stroke-linecap="round"/>')
        
        # Nodes at ends
        svg_content.append(f'<circle cx="{x2}" cy="{y2}" r="{width_line + 1}" fill="{color}" opacity="{opacity + 0.2}"/>')
        
        # Occasional branches or perpendicular lines
        if random.random() > 0.7:
             perp_len = random.randint(20, 60)
             # Perpendicular direction
             p_x = x2 + math.cos(angle_rad + math.pi/2) * perp_len
             p_y = y2 + math.sin(angle_rad + math.pi/2) * perp_len
             svg_content.append(f'<line x1="{x2}" y1="{y2}" x2="{p_x}" y2="{p_y}" stroke="{color}" stroke-width="{width_line}" opacity="{opacity}" stroke-linecap="round"/>')
             svg_content.append(f'<circle cx="{p_x}" cy="{p_y}" r="{width_line}" fill="{color}" opacity="{opacity + 0.2}"/>')

    svg_content.append('</svg>')
    
    with open(filename, "w") as f:
        f.write("\n".join(svg_content))

if __name__ == "__main__":
    generate_radial_circuit_svg("e:/portfolio/public/background-circuit-radial.svg")
    generate_light_mode_svg("e:/portfolio/public/background-circuit-radial-light.svg")
