import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";

export function GetStartedDialog({ trigger }: { trigger: ReactNode }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = encodeURIComponent(String(data.get("name") ?? ""));
    const email = encodeURIComponent(String(data.get("email") ?? ""));
    const role = encodeURIComponent(String(data.get("role") ?? ""));
    const message = encodeURIComponent(String(data.get("message") ?? ""));
    const subject = `Get started inquiry — ${decodeURIComponent(name)}`;
    const body = `Name: ${decodeURIComponent(name)}%0D%0AEmail: ${decodeURIComponent(
      email,
    )}%0D%0ARole: ${decodeURIComponent(role)}%0D%0A%0D%0A${decodeURIComponent(message)}`;
    window.location.href = `mailto:info@transatlantic-talent-bridge.com?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setSubmitted(false);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("Let's get started", "Lass uns loslegen")}</DialogTitle>
          <DialogDescription>
            {t(
              "Share a few details and we'll be in touch shortly.",
              "Teile uns ein paar Angaben mit, und wir melden uns in Kürze.",
            )}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-sm text-brand-navy">
            {t(
              "Thanks! Your email client should have opened. We'll respond soon.",
              "Danke! Dein E-Mail-Programm sollte sich geöffnet haben. Wir melden uns bald.",
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="gs-name">{t("Name", "Name")}</Label>
              <Input id="gs-name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gs-email">{t("Email", "E-Mail")}</Label>
              <Input id="gs-email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gs-role">{t("I am a…", "Ich bin…")}</Label>
              <Input
                id="gs-role"
                name="role"
                placeholder={t(
                  "Professional, Employer, Agency",
                  "Fachkraft, Arbeitgeber, Agentur",
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gs-message">{t("Message", "Nachricht")}</Label>
              <Textarea id="gs-message" name="message" rows={4} />
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-brand-navy hover:bg-brand-sky text-white">
                {t("Send", "Senden")}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
