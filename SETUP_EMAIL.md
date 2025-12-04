# Email Contact Form Setup

The contact form now uses **Web3Forms** to send real emails to awosiseo@gmail.com.

## Quick Setup (5 minutes)

### Step 1: Get Web3Forms API Key
1. Go to https://web3forms.com
2. Click "Get Started Free"
3. Enter your email: **yourmail@mail.com**
4. Verify your email (check inbox)
5. Copy your **Access Key**

### Step 2: Add API Key to Project
Create a file named `.env.local` in the project root:

```bash
# In /Users/Username/Documents/my-portfolio/
NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_access_key_here
```

Replace `your_actual_access_key_here` with the key from Web3Forms.

### Step 3: Restart Dev Server
```bash
# Stop the current server (Ctrl+C)
npm run dev
```

### Step 4: Test the Contact Form
1. Go to http://localhost:3000/contact
2. Fill in test data
3. Submit the form
4. Check awosiseo@gmail.com for the email!

## Important Notes

✅ The `.env.local` file is already in `.gitignore` (won't be committed)  
✅ Free tier: 250 emails/month (more than enough)  
✅ Emails arrive instantly  
✅ No credit card required  

## Troubleshooting

**If emails don't send:**
1. Check the API key is correct in `.env.local`
2. Make sure the file is named exactly `.env.local` (not `.env` or `.env.local.example`)
3. Restart the dev server after adding the key
4. Check browser console (F12) for any errors

**If you see "Message delivery failed":**
- Verify your internet connection
- Double-check the API key
- Try creating a new key on Web3Forms

That's it! Your contact form will now send real emails. 🎉
