# Donation Page Configuration Guide

The donation page has been created with all the specifications you requested. Here's what needs to be customized:

## 1. WhatsApp Number
In [src/components/Donation.tsx](src/components/Donation.tsx):
- Line 6: Replace `919876543210` with your actual WhatsApp number (with country code, no spaces)
```tsx
const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number
```

Example: For India (+91) 98765 43210 → `"919876543210"`

## 2. Bank Details PDF
- Create a `bank-details.pdf` file in the `public/` folder
- Link in [src/components/Donation.tsx](src/components/Donation.tsx) line 7 already points to `/bank-details.pdf`
- You can use tools like Canva, Adobe InDesign, or even Word/Google Docs exported as PDF to create this

## 3. Donation Photo
- Replace the placeholder image URL in [src/components/Donation.tsx](src/components/Donation.tsx)
- Currently uses: `https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218997/Logo2_kuyzqh.png`
- Update line 68 with your actual photo

## Page Structure

### Components Included:
✅ Header - Responsive navigation with donation button linking to `/donation`
✅ Top Section - Logo, heading, description, and photo (2-column on desktop, stacked on mobile)
✅ Achievements Section - 5 achievement cards (responsive grid)
✅ Action Buttons - WhatsApp contact, Bank Details PDF, Donation Form
✅ Footer - Centered logo and heading
✅ Full Responsiveness - Mobile-first design with Tailwind CSS

### Features:
- Fully responsive design (mobile, tablet, desktop)
- Dark theme matching your brand (black background, #b0db9c green accent)
- Smooth animations and hover effects
- Accessible markup with proper semantic HTML
- Icons from lucide-react
- Links to:
  - WhatsApp contact
  - Bank details PDF
  - Google Forms donation link

## Testing
1. Click the "Donate" button in the header
2. Verify the page loads properly on mobile and desktop
3. Click the buttons to ensure they work:
   - WhatsApp button should open WhatsApp chat
   - Bank Details button should open/download the PDF
   - Donation Form should open the Google Form

## Customization Tips

### Change Achievement Metrics
Edit the `achievements` array in [src/components/Donation.tsx](src/components/Donation.tsx) to reflect your actual numbers.

### Update Color Scheme
All color references use `#b0db9c` (green) and `#1f1f1f`/`#2e2e2e` (dark). Modify these in the file if needed.

### Add More Images
Replace image URLs with your actual Cloudinary links or local assets in the `public/` folder.

## Important Notes
- The donation button in Header now navigates to `/donation` route
- Both `/donation` and `/donate` routes are configured in [src/App.tsx](src/App.tsx)
- The page includes responsive grid layouts that automatically adjust on mobile
- All Tailwind CSS classes are responsive with `md:` prefixes for tablet+ breakpoints

---
**Ready to customize? Update the WhatsApp number, add bank details PDF, and you're all set!**
