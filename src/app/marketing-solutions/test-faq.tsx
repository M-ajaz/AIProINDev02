"use client"
import { EnhancedFAQSection } from "@/components";

const TestFAQPage = () => {
    const faqs = [
        {
            q: "Test FAQ Question",
            a: "This is a test FAQ answer to verify the component works correctly."
        }
    ];

    return (
        <div className="bg-white w-full">
            <h1>Test FAQ Section</h1>
            <EnhancedFAQSection
                title="Test FAQ Section"
                description="Testing the FAQ component"
                FAQList={faqs}
            />
        </div>
    );
};

export default TestFAQPage;