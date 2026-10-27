// SETUP REQUIRED: replace this placeholder with an email address you control.
const CONTACT_EMAIL = "REPLACE-WITH-YOUR-EMAIL@example.com";
document.getElementById('contactForm')?.addEventListener('submit',event=>{
 event.preventDefault();
 const name=document.getElementById('senderName').value.trim();
 const email=document.getElementById('senderEmail').value.trim();
 const message=document.getElementById('senderMessage').value.trim();
 if(CONTACT_EMAIL.includes('REPLACE-WITH-YOUR-EMAIL')) {
   const status=document.getElementById('contactStatus');status.hidden=false;
   status.textContent='The contact email is still a placeholder. Open contact.js and replace CONTACT_EMAIL before launch.';
   return;
 }
 const subject=encodeURIComponent('Message for Atlas Angel Finds');
 const body=encodeURIComponent(`Name: ${name}\nReply email: ${email}\n\n${message}`);
 window.location.href=`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
