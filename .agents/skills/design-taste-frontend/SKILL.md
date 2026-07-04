---
name: design-taste-frontend
description: Clean Warm Nordic editorial-style interfaces. Warm off-white canvas, typographic contrast using serifs, bento-inspired grids, muted terracotta and sage spot colors. No standard gradients, no generic icons.
---

# Protocol: Warm Nordic Minimalist Portfolio Architect

## 1. Protocol Overview
Name: Warm Nordic Minimalist & Editorial UI
Description: This protocol enforces the visual system for a premium developer portfolio based on the Lee Robinson layout structure. It combines editorial legibility with Warm Nordic tones (creamy off-whites, charcoal typography, elegant serifs, and desaturated natural accent tones) while rejecting generic SaaS styling defaults.

## 2. Absolute Negative Constraints (Banned Elements)
- DO NOT use the default "Inter", "Roboto", or "Open Sans" typefaces.
- DO NOT use generic thin-line icon libraries like "Lucide" or standard "Heroicons" in public facing layouts. Prefer custom SVG path primitives, Phosphor Icons (Bold/Fill), or Radix UI Icons.
- DO NOT use default Tailwind drop shadows (`shadow-md`, `shadow-lg`, etc.). Shadows must be practically non-existent or heavily customized to be ultra-diffuse and low opacity (< 0.04).
- DO NOT use primary saturated colors for backgrounds (e.g., no bright blue, green, or red hero boxes).
- DO NOT use neon colors, gradients, or heavy 3D glassmorphic boxes.
- DO NOT use emojis anywhere in the markup, headings, or core text content. Replace with clean SVG primitives or Phosphor/Radix icons.
- DO NOT use AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Game-changer", "Delve". Write plain, descriptive language.

## 3. Typographic Architecture
- **Primary Serif (Hero Headings & Section Titles)**: Use `Newsreader`, `Playfair Display`, `Lora`, or `Instrument Serif`. Set `font-weight: 500`, apply tight tracking (`letter-spacing: -0.02em` to `-0.04em`), and tight line-height (`1.15`).
- **Primary Sans-Serif (Body text, UI, Buttons)**: Use clean, geometric system-native sans-serifs like `Geist Sans`, `SF Pro Display`, or `Helvetica Neue`. Keep body text at a generous line-height of `1.6` for optimal readability.
- **Primary Monospace (Dates, Code, Metadata, Small Tags)**: Use `Geist Mono` or `SF Mono`.
- **Text Colors**: 
  - Main Body: Deep charcoal/off-black `#2F3437` or `#1E2022` (never use pure `#000000`).
  - Muted/Secondary Text: Neutral warm gray `#787774` or `#6E7376`.

## 4. Color Palette (Warm Nordic Palette)
- **Canvas / Background**: Warm Bone/Off-White `#F7F6F3` or Creamy Beige `#FBFBFA`.
- **Primary Surface (Cards, Dividers)**: Pure White `#FFFFFF` for contrast, or `#F9F9F8` for surfaces.
- **Borders & Dividers**: Crisp, ultra-light warm gray `#EAEAEA` or `rgba(0,0,0,0.06)`.
- **Spot Accent Colors (Washed-out, natural pastels)**:
  - Pale Terracotta: `#FDF2EC` (Text: `#A04A26` - for badges/highlights)
  - Pale Sage Green: `#EDF3EC` (Text: `#346538` - for availability tags)
  - Pale Sand/Gold: `#FBF3DB` (Text: `#956400` - for warning or focus states)
  - Muted Slate Blue: `#F1F5F9` (Text: `#334155` - for neutral secondary buttons)

## 5. Component Specifications
- **Layout & Columns (Lee Robinson Style)**:
  - Keep the page layout centered, clean, and single-column with a maximum width of `max-w-2xl` (680px) for maximum readability.
  - Spacing must be generous (e.g., margins and padding using `py-16` or `py-24`).
- **Dividers**:
  - Separate main sections (Hero, Bio, Experience, Projects) using thin 1px horizontal lines: `border-top: 1px solid #EAEAEA` or `rgba(0,0,0,0.06)`.
- **Primary Action Buttons**:
  - Solid dark charcoal background `#1E2022`, text `#FFFFFF`.
  - Crisp border-radius (`4px` to `6px`). No shadow.
  - Subtly scale down (`transform: scale(0.98)`) on active press.
- **Availability Status Badge**:
  - Small, clean pill badge: Background `#EDF3EC` (Pale Sage), text `#346538` (Dark Sage), uppercase wide tracking (`letter-spacing: 0.05em`), font-size `text-xs`.
- **Timeline / Experience blocks**:
  - Simple vertical alignments without heavy graphic lines. Date on the left (or right) using monospace, description in charcoal sans-serif.

## 6. Iconography & SVG Directives
- **System Icons**: Prefer "Phosphor Icons" or "Radix Icons". Maintain a consistent `stroke-width` of `1.5` or `2` across the application.
- **SVG Paths**: Write clean, custom SVG wrappers directly in code rather than adding large dependency libraries where possible.

## 7. Motion & Transitions
- **Scroll Entrance**: Elements should gently drift upwards as they enter the screen. Use a simple fade-in transition: `translateY(8px)` to `translateY(0)` with `opacity: 0` to `opacity: 1` over `400ms` using simple CSS animations or Framer Motion transitions.
- **Hover States**: Links should have thin underlines (`underline-offset-[3px]`) that shift opacity or color on hover, rather than scale or sudden background highlights.
