import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  variables: string[];
}

const defaultTemplates: EmailTemplate[] = [
  {
    id: "gift-notification",
    name: "הודעת מתנה",
    subject: "קיבלת מתנת מניות מ{{senderName}}! 🎁",
    content: `
      <div style="font-family: 'Greycliff Hebrew CF', Arial, sans-serif; direction: rtl; text-align: right; max-width: 600px; margin: 0 auto; background: white;">
        <!-- Header -->
        <div style="background: #DBE3F3; padding: 30px; text-align: center;">
          <div style="color: #4C7EFB; font-size: 36px; font-weight: bold; margin-bottom: 10px;">
            Stock4U
          </div>
          <div style="color: #486284; font-size: 24px; font-weight: 700;">
            🎉 יש לך מתנה מיוחדת! 🎉
          </div>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 30px; background: white;">
          <div style="color: #486284; font-size: 28px; font-weight: 700; margin-bottom: 20px; text-align: center;">
            שלום {{recipientName}}!
          </div>
          
          <div style="color: #486284; font-size: 18px; line-height: 1.6; margin-bottom: 30px;">
            <strong>{{senderName}}</strong> שלח/ה לך מתנת מניות בסך <strong style="color: #4C7EFB;">{{amount}} ש"ח</strong>!
          </div>

          <div style="background: #DBE3F3; padding: 25px; border-radius: 15px; margin: 30px 0;">
            <div style="color: #486284; font-size: 16px; line-height: 1.6;">
              <strong>הו��עה אישית:</strong><br>
              "{{personalMessage}}"
            </div>
          </div>

          <!-- CTA Button -->
          <div style="text-align: center; margin: 40px 0;">
            <a href="{{claimLink}}" style="display: inline-block; background: #4C7EFB; color: white; padding: 15px 40px; border-radius: 50px; font-size: 18px; font-weight: 700; text-decoration: none; box-shadow: 0 10px 20px rgba(76, 126, 251, 0.3);">
              קבל את המתנה שלך 🎁
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #DBE3F3; padding: 30px; text-align: center;">
          <div style="color: #4C7EFB; font-size: 16px; margin-bottom: 10px;">
            Stock4U - המקום שלך להשקעות חכמות
          </div>
          <div style="color: #8CA2C0; font-size: 14px;">
            support@stock4u.co.il | 03-12345678
          </div>
        </div>
      </div>
    `,
    variables: ["recipientName", "senderName", "amount", "personalMessage", "claimLink"]
  },
  {
    id: "purchase-confirmation",
    name: "אישור רכישה",
    subject: "אישור רכישת מתנת מניות - הזמנה #{{orderNumber}}",
    content: `
      <div style="font-family: 'Greycliff Hebrew CF', Arial, sans-serif; direction: rtl; text-align: right; max-width: 600px; margin: 0 auto; background: white;">
        <!-- Header -->
        <div style="background: #DBE3F3; padding: 30px; text-align: center;">
          <div style="color: #4C7EFB; font-size: 36px; font-weight: bold; margin-bottom: 10px;">
            Stock4U
          </div>
          <div style="color: #486284; font-size: 24px; font-weight: 700;">
            ✅ הזמנתך אושרה!
          </div>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 30px; background: white;">
          <div style="color: #486284; font-size: 28px; font-weight: 700; margin-bottom: 20px; text-align: center;">
            תודה {{buyerName}}!
          </div>
          
          <div style="color: #486284; font-size: 18px; line-height: 1.6; margin-bottom: 30px;">
            הזמנתך לרכישת מתנת מניות התקבלה ואושרה בהצלחה.
          </div>

          <!-- Order Details -->
          <div style="border: 2px solid #DBE3F3; border-radius: 15px; padding: 25px; margin: 30px 0;">
            <div style="color: #4C7EFB; font-size: 20px; font-weight: 700; margin-bottom: 15px;">
              פרטי ההזמנה:
            </div>
            <div style="color: #486284; font-size: 16px; line-height: 1.8;">
              • <strong>מספר הזמנה:</strong> {{orderNumber}}<br>
              • <strong>סכום:</strong> {{totalAmount}} ש"ח<br>
              • <strong>מקבל המתנה:</strong> {{recipientName}}
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #DBE3F3; padding: 30px; text-align: center;">
          <div style="color: #4C7EFB; font-size: 16px; margin-bottom: 10px;">
            Stock4U - המקום שלך להשקעות חכמות
          </div>
          <div style="color: #8CA2C0; font-size: 14px;">
            support@stock4u.co.il | 03-12345678
          </div>
        </div>
      </div>
    `,
    variables: ["buyerName", "orderNumber", "totalAmount", "recipientName"]
  }
];

export default function EmailEditor() {
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate>(defaultTemplates[0]);
  const [previewMode, setPreviewMode] = useState(false);
  const [variables, setVariables] = useState<Record<string, string>>({
    recipientName: "יוסי כהן",
    senderName: "דינה לוי",
    amount: "500",
    personalMessage: "מזל טוב על ההתחלה! רציתי לתת לך משהו מיוחד לתחילת הדרך שלך בעולם ההשקעות.",
    claimLink: "https://stock4u.co.il/claim/abc123",
    buyerName: "דינה לוי",
    orderNumber: "ST4U-2024-001234",
    totalAmount: "500"
  });

  const handleVariableChange = (key: string, value: string) => {
    setVariables(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const processTemplate = (content: string): string => {
    let processed = content;
    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      processed = processed.replace(regex, value);
    });
    return processed;
  };

  return (
    <div className="min-h-screen bg-white hebrew-font" dir="rtl">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-stock4u-light-blue/30 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-stock4u-dark-grey">
            <Link to="/" className="hover:text-stock4u-happy-blue">דף הבית</Link>
            <span className="mx-2">&gt;</span>
            <span className="font-bold">עורך מיילים</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Template Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-stock4u-light-blue rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-stock4u-dark-grey mb-6">
                טמפלטי מיילים
              </h2>
              
              <div className="space-y-4">
                {defaultTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template)}
                    className={`w-full p-4 text-right rounded-lg border-2 transition-all ${
                      selectedTemplate.id === template.id
                        ? 'border-stock4u-happy-blue bg-stock4u-happy-blue/10 text-stock4u-happy-blue'
                        : 'border-stock4u-light-blue hover:border-stock4u-happy-blue hover:bg-stock4u-light-blue/30'
                    }`}
                  >
                    <div className="font-bold text-lg">{template.name}</div>
                    <div className="text-sm opacity-70 mt-1">{template.subject}</div>
                  </button>
                ))}
              </div>

              {/* Variables Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-stock4u-dark-grey mb-4">
                  משתנים דינמיים
                </h3>
                <div className="space-y-3">
                  {selectedTemplate.variables.map((variable) => (
                    <div key={variable}>
                      <label className="block text-sm font-medium text-stock4u-dark-grey mb-1">
                        {variable}
                      </label>
                      <input
                        type="text"
                        value={variables[variable] || ''}
                        onChange={(e) => handleVariableChange(variable, e.target.value)}
                        className="w-full px-3 py-2 border border-stock4u-light-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-stock4u-happy-blue"
                        placeholder={`הכנס ${variable}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Email Preview/Editor */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-stock4u-light-blue rounded-xl shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-stock4u-light-blue">
                <h1 className="text-3xl font-bold text-stock4u-dark-grey">
                  עורך מיילים
                </h1>
                <div className="flex gap-3">
                  <button
                    onClick={() => setPreviewMode(!previewMode)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      previewMode 
                        ? 'bg-stock4u-happy-blue text-white' 
                        : 'bg-stock4u-light-blue text-stock4u-dark-grey hover:bg-stock4u-happy-blue hover:text-white'
                    }`}
                  >
                    {previewMode ? 'חזור לעריכה' : 'תצוגה מוקדמת'}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {previewMode ? (
                  /* Preview Mode */
                  <div className="border border-stock4u-light-blue rounded-lg overflow-hidden">
                    <div className="bg-stock4u-light-blue/30 p-4 border-b border-stock4u-light-blue">
                      <div className="text-sm text-stock4u-dark-grey">
                        <strong>נושא:</strong> {processTemplate(selectedTemplate.subject)}
                      </div>
                    </div>
                    <div 
                      className="p-4 bg-white"
                      dangerouslySetInnerHTML={{ 
                        __html: processTemplate(selectedTemplate.content) 
                      }}
                    />
                  </div>
                ) : (
                  /* Edit Mode */
                  <div className="space-y-6">
                    <div>
                      <label className="block text-lg font-bold text-stock4u-dark-grey mb-2">
                        נושא המייל
                      </label>
                      <input
                        type="text"
                        value={selectedTemplate.subject}
                        onChange={(e) => setSelectedTemplate(prev => ({
                          ...prev,
                          subject: e.target.value
                        }))}
                        className="w-full px-4 py-3 border border-stock4u-light-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-stock4u-happy-blue text-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-lg font-bold text-stock4u-dark-grey mb-2">
                        תוכן המייל (HTML)
                      </label>
                      <textarea
                        value={selectedTemplate.content}
                        onChange={(e) => setSelectedTemplate(prev => ({
                          ...prev,
                          content: e.target.value
                        }))}
                        className="w-full h-96 px-4 py-3 border border-stock4u-light-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-stock4u-happy-blue font-mono text-sm"
                        style={{ direction: 'ltr' }}
                      />
                    </div>

                    <div className="flex gap-4">
                      <button className="px-6 py-3 bg-stock4u-happy-blue text-white rounded-lg hover:bg-blue-600 transition-all font-bold">
                        שלח מייל בדוגמה
                      </button>
                      <button className="px-6 py-3 border border-stock4u-happy-blue text-stock4u-happy-blue rounded-lg hover:bg-stock4u-happy-blue hover:text-white transition-all font-bold">
                        שמור טמפלט
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
