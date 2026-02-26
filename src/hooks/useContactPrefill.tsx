import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { scrollToId } from "@/lib/scroll";

interface ContactPrefillContextType {
  subject: string;
  setSubject: (s: string) => void;
  scrollToContact: (subject?: string) => void;
}

const ContactPrefillContext = createContext<ContactPrefillContextType>({
  subject: '',
  setSubject: () => {},
  scrollToContact: () => {},
});

export function ContactPrefillProvider({ children }: { children: ReactNode }) {
  const [subject, setSubject] = useState('');

  const scrollToContact = useCallback((prefill?: string) => {
    if (prefill) setSubject(prefill);
    setTimeout(() => scrollToId("contact"), 50);
  }, []);

  return (
    <ContactPrefillContext.Provider value={{ subject, setSubject, scrollToContact }}>
      {children}
    </ContactPrefillContext.Provider>
  );
}

export function useContactPrefill() {
  return useContext(ContactPrefillContext);
}
