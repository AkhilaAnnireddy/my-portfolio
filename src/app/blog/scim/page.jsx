"use client";

import { motion } from "framer-motion";

export default function SCIMArticle() {
  return (
    <div className="min-h-screen bg-black text-blue-200 py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-400 mb-3 text-center">
          A Developer&apos;s Guide to SCIM API for User Provisioning
        </h1>
        <p className="text-blue-400 text-sm text-center mb-12">
          April 15, 2025 • Akhila Annireddy
        </p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-lg text-blue-100 leading-relaxed"
        >
          SCIM (System for Cross-domain Identity Management) is an open standard
          protocol designed to simplify identity management and automate user
          provisioning and deprovisioning between identity providers (IdPs) and
          service providers (SPs). As organizations scale, managing user access
          and roles across multiple platforms becomes a challenge—SCIM provides
          a standardized and secure way to handle this.
        </motion.p>

        {/* SCIM User Resource Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            SCIM User Resource Example
          </h2>
          <pre className="bg-gray-900 text-blue-100 p-5 rounded-xl text-sm overflow-x-auto border border-blue-900/50 shadow-lg">
            {`
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "userName": "john.doe",
  "name": {
    "givenName": "John",
    "familyName": "Doe"
  },
  "emails": [
    {
      "value": "john.doe@example.com",
      "primary": true
    }
  ],
  "active": true
}
            `}
          </pre>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            Authentication
          </h2>
          <p className="text-blue-100 mb-3 leading-relaxed">
            SCIM APIs are typically secured using OAuth 2.0 bearer tokens. You
            can authenticate requests by sending the token in the{" "}
            <code>Authorization</code> header:
          </p>
          <pre className="bg-gray-900 text-blue-100 p-5 rounded-xl text-sm overflow-x-auto border border-blue-900/50 shadow-lg">
            {`
Authorization: Bearer YOUR_ACCESS_TOKEN
            `}
          </pre>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Conclusion
          </h2>
          <p className="text-blue-100 leading-relaxed">
            SCIM streamlines identity management in modern applications. If
            you&apos;re building SaaS products or managing users across systems,
            SCIM 2.0 is a must-know protocol. With a bit of setup, it can save
            hours of manual provisioning and ensure secure, scalable identity
            automation.
          </p>
        </section>
      </div>
    </div>
  );
}
