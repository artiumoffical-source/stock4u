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
    id: "gift-notification-figma",
    name: "הודעת מתנה (עיצוב חדש)",
    subject: "איזה כיף! קיבלת מתנה מ{{senderName}}! 🎉",
    content: `
      <!DOCTYPE html>
      <html dir="rtl" lang="he">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>קיבלת מתנה!</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Greycliff Hebrew CF', Arial, sans-serif; direction: rtl;">
        <!-- Background with decorative elements -->
        <div style="
          background: #FFC547;
          background-image:
            radial-gradient(circle at 15% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 85% 30%, rgba(255,255,255,0.15) 0%, transparent 40%),
            radial-gradient(circle at 45% 60%, rgba(255,255,255,0.1) 0%, transparent 30%),
            radial-gradient(circle at 75% 80%, rgba(255,255,255,0.1) 0%, transparent 35%);
          padding: 60px 20px;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        ">

          <!-- Decorative icons scattered around -->
          <div style="position: absolute; top: 80px; left: 100px; width: 60px; height: 60px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px rgba(0,0,0,0.1); transform: rotate(15deg);">
            <span style="font-size: 24px; color: #4C7EFB;">₪</span>
          </div>

          <div style="position: absolute; top: 150px; right: 120px; width: 50px; height: 50px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px rgba(0,0,0,0.1); transform: rotate(-20deg);">
            <span style="font-size: 20px; color: #E96036;">$</span>
          </div>

          <div style="position: absolute; bottom: 200px; left: 80px; width: 55px; height: 55px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px rgba(0,0,0,0.1); transform: rotate(25deg);">
            <span style="font-size: 22px; color: #4C7EFB;">€</span>
          </div>

          <div style="position: absolute; top: 120px; right: 200px; width: 45px; height: 45px; background: rgba(255,255,255,0.9); border-radius: 20%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px rgba(0,0,0,0.1); transform: rotate(-15deg);">
            <span style="font-size: 18px; color: #E96036;">✦</span>
          </div>

          <!-- Header with Stock4U branding -->
          <div style="text-align: center; margin-bottom: 40px;">
            <div style="background: white; border: 1px solid #DDD; padding: 15px 0; margin-bottom: 30px;">
              <div style="color: #4C7EFB; font-size: 32px; font-weight: bold; font-family: 'Holtwood One SC', Arial, sans-serif;">
                STOCK4U
              </div>
            </div>
          </div>

          <!-- Main content card -->
          <div style="
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 34px;
            padding: 40px 30px;
            box-shadow: 0 4px 39px rgba(0,0,0,0.25);
            text-align: center;
            position: relative;
          ">

            <!-- Excitement text -->
            <div style="margin-bottom: 15px;">
              <h1 style="
                color: #E96036;
                font-size: 34px;
                font-weight: 800;
                margin: 0 0 10px 0;
                font-family: 'Greycliff Hebrew CF', Arial, sans-serif;
              ">איזה כיף!</h1>

              <h2 style="
                color: #E96036;
                font-size: 54px;
                font-weight: 800;
                margin: 0;
                font-family: 'Greycliff Hebrew CF', Arial, sans-serif;
                line-height: 1.1;
              ">קיבלת מתנה!</h2>
            </div>

            <!-- Sender info -->
            <div style="margin: 30px 0;">
              <p style="
                color: #4C7EFB;
                font-size: 24px;
                font-weight: 400;
                margin: 0;
                font-family: 'Poppins', Arial, sans-serif;
              ">ממי המתנה? {{senderName}} כמובן!</p>
            </div>

            <!-- Company logo (conditional) -->
            <div style="margin: 30px 0;">
              <img src="{{senderLogo}}" alt="{{senderName}} Logo" style="
                max-width: 400px;
                max-height: 120px;
                height: auto;
                border-radius: 15px;
                box-shadow: 0 4px 16px rgba(0,0,0,0.1);
                display: {{senderLogo}} ? 'block' : 'none';
              ">
            </div>

            <!-- CTA Button -->
            <div style="margin: 40px 0;">
              <a href="{{claimLink}}" style="
                display: inline-block;
                background: #4C7EFB;
                color: white;
                padding: 14px 30px;
                border-radius: 56px;
                font-size: 18px;
                font-weight: 700;
                text-decoration: none;
                box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
                font-family: 'Greycliff Hebrew CF', Arial, sans-serif;
                transition: transform 0.2s;
              ">
                לצפייה במתנה
              </a>
            </div>

            <!-- Gift details -->
            <div style="
              background: #DBE3F3;
              padding: 20px;
              border-radius: 15px;
              margin: 30px 0;
              text-align: right;
              display: {{giftDetails}} ? 'block' : 'none';
            ">
              <h3 style="color: #4C7EFB; margin: 0 0 10px 0; font-size: 18px;">פרטי המתנה:</h3>
              <div style="color: #486284; line-height: 1.6;">
                {{giftDetails}}
              </div>
            </div>

          </div>

          <!-- Statistics section -->
          <div style="margin-top: 60px; text-align: center;">
            <div style="display: inline-flex; gap: 30px; flex-wrap: wrap; justify-content: center;">
              <div style="background: rgba(239,242,246,0.4); padding: 20px; border-radius: 24px; min-width: 160px;">
                <div style="color: #486284; font-size: 48px; font-weight: 700; margin-bottom: 8px;">24+</div>
                <div style="color: #8CA2C0; font-size: 16px;">מדינות שבהם אנו עובדים</div>
              </div>

              <div style="background: rgba(239,242,246,0.4); padding: 20px; border-radius: 24px; min-width: 160px;">
                <div style="color: #486284; font-size: 48px; font-weight: 700; margin-bottom: 8px;">17M</div>
                <div style="color: #8CA2C0; font-size: 16px;">אנשים שהאמינו בנו</div>
              </div>

              <div style="background: rgba(239,242,246,0.4); padding: 20px; border-radius: 24px; min-width: 160px;">
                <div style="color: #486284; font-size: 48px; font-weight: 700; margin-bottom: 8px;">+95%</div>
                <div style="color: #8CA2C0; font-size: 16px;">לקוחות מרוצים</div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="
            margin-top: 80px;
            background: #DBE3F3;
            padding: 40px 20px;
            border-radius: 20px;
            text-align: center;
          ">
            <div style="color: #4C7EFB; font-size: 18px; font-weight: 700; margin-bottom: 10px;">
              Stock4U - המקום שלך להשקעות חכמות
            </div>
            <div style="color: #8CA2C0; font-size: 14px;">
              support@stock4u.co.il | 03-12345678
            </div>
          </div>

        </div>
      </body>
      </html>
    `,
    variables: ["senderName", "senderLogo", "claimLink", "giftDetails"]
  },
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
    senderName: "United",
    senderLogo: "https://api.builder.io/api/v1/image/assets/TEMP/378ddfe0d1afad1c8baf4e915e3a1587e200b3b8?width=1105",
    amount: "500",
    personalMessage: "מזל טוב על ההתחלה! רציתי לתת לך משהו מיוחד לתחילת הדרך שלך בעולם ההשקעות.",
    claimLink: "https://stock4u.co.il/claim/abc123",
    giftDetails: "מניות United Airlines - 5 מניות בשווי 500 ש\"ח",
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

      {/* Instructions Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-stock4u-light-blue/20 rounded-xl p-6">
          <h3 className="text-xl font-bold text-stock4u-dark-grey mb-4">
            הוראות לשימוש בטמפלט החדש:
          </h3>
          <div className="space-y-3 text-stock4u-dark-grey">
            <div>
              <strong>senderName:</strong> שם השולח שיופיע ב"ממי המתנה"
            </div>
            <div>
              <strong>senderLogo:</strong> URL של לוגו השולח (אם אין לוגו - השאר ריק והלוגו לא יופיע)
            </div>
            <div>
              <strong>claimLink:</strong> קישור לקבלת המתנה
            </div>
            <div>
              <strong>giftDetails:</strong> פרטי המתנה (אם ריק - הסעיף לא יופיע)
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
