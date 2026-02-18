// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Send, CheckCircle } from "lucide-react";
// import type { ContactFormData } from "@/types";

// export default function ContactForm() {
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     setIsSubmitting(false);
//     setIsSubmitted(true);

//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setFormData({ name: "", email: "", message: "" });
//       setIsSubmitted(false);
//     }, 3000);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   if (isSubmitted) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="flex flex-col items-center justify-center py-20 space-y-4"
//       >
//         <CheckCircle className="w-20 h-20 text-green-500" />
//         <h3 className="text-2xl font-bold text-(--color-text-primary)">
//           Message Sent!
//         </h3>
//         <p className="text-(--color-text-secondary)">
//           Thank you for reaching out. I'll get back to you soon.
//         </p>
//       </motion.div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {/* Name Input */}
//       <div>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your name"
//           required
//           className="w-full px-6 py-4 rounded-xl bg-(--color-bg-card) border border-(--color-border) text-(--color-text-primary) placeholder:text-(--color-text-muted) focus:border-(--color-accent-primary) focus:outline-none focus:ring-2 focus:ring-(--color-accent-primary)/20 transition-all"
//         />
//       </div>

//       {/* Email Input */}
//       <div>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Your email"
//           required
//           className="w-full px-6 py-4 rounded-xl bg-(--color-bg-card) border border-(--color-border) text-(--color-text-primary) placeholder:text-(--color-text-muted) focus:border-(--color-accent-primary) focus:outline-none focus:ring-2 focus:ring-(--color-accent-primary)/20 transition-all"
//         />
//       </div>

//       {/* Message Textarea */}
//       <div>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Your message"
//           required
//           rows={6}
//           className="w-full px-6 py-4 rounded-xl bg-(--color-bg-card) border border-(--color-border) text-(--color-text-primary) placeholder:text-(--color-text-muted) focus:border-(--color-accent-primary) focus:outline-none focus:ring-2 focus:ring-(--color-accent-primary)/20 transition-all resize-none"
//         />
//       </div>

//       {/* Submit Button */}
//       <motion.button
//         type="submit"
//         disabled={isSubmitting}
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         className="inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-purple text-white text-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed group"
//       >
//         {isSubmitting ? (
//           <>
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//               className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//             />
//             Sending...
//           </>
//         ) : (
//           <>
//             Send email
//             <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </>
//         )}
//       </motion.button>
//     </form>
//   );
// }




"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import type { ContactFormData } from "@/types";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgolzpor";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        // Formspree usually returns { errors: [...] }
        const msg =
          data?.errors?.[0]?.message ||
          "Something went wrong. Please try again.";
        throw new Error(msg);
      }

      setIsSubmitted(true);

      // reset after a bit
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setError(message || "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 space-y-4"
      >
        <CheckCircle className="w-20 h-20 text-green-500" />
        <h3 className="text-2xl font-bold text-(--color-text-primary)">
          Message Sent!
        </h3>
        <p className="text-(--color-text-secondary)">
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error message */}
      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-500">
          <AlertCircle className="w-5 h-5 mt-0.5" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Name Input */}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="w-full px-6 py-4 rounded-xl bg-(--color-bg-card) border border-(--color-border) text-(--color-text-primary) placeholder:text-(--color-text-muted) focus:border-(--color-accent-primary) focus:outline-none focus:ring-2 focus:ring-(--color-accent-primary)/20 transition-all"
        />
      </div>

      {/* Email Input */}
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className="w-full px-6 py-4 rounded-xl bg-(--color-bg-card) border border-(--color-border) text-(--color-text-primary) placeholder:text-(--color-text-muted) focus:border-(--color-accent-primary) focus:outline-none focus:ring-2 focus:ring-(--color-accent-primary)/20 transition-all"
        />
      </div>

      {/* Message Textarea */}
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          required
          rows={6}
          className="w-full px-6 py-4 rounded-xl bg-(--color-bg-card) border border-(--color-border) text-(--color-text-primary) placeholder:text-(--color-text-muted) focus:border-(--color-accent-primary) focus:outline-none focus:ring-2 focus:ring-(--color-accent-primary)/20 transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-purple text-white text-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
            Sending...
          </>
        ) : (
          <>
            Send message
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </motion.button>
    </form>
  );
}
