export default function SCIMArticle() {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          A Developer's Guide to SCIM API for User Provisioning
        </h1>
        <p className="text-blue-300 text-sm mb-6">
          April 15, 2025 • Akhila Annireddy
        </p>

        <p className="mb-6 text-lg text-blue-100 leading-relaxed">
          SCIM (System for Cross-domain Identity Management) is an open standard protocol designed to simplify identity management and
          automate user provisioning and deprovisioning between identity providers (IdPs) and service providers (SPs). As organizations scale, managing user access and roles across multiple platforms becomes a challenge—SCIM provides a standardized and secure way to handle this.
        </p>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">🔧 What is SCIM?</h2>
        <p className="mb-4 text-blue-100 leading-relaxed">
          SCIM allows systems to exchange user identity data via a RESTful API using JSON payloads. It supports the entire user lifecycle—from account creation and updates to deactivation and deletion—while ensuring synchronization between systems.
        </p>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">🚀 Why Use SCIM?</h2>
        <ul className="list-disc list-inside mb-6 text-blue-100 leading-relaxed">
          <li>✔️ Automates user provisioning and deprovisioning.</li>
          <li>✔️ Maintains consistent user identities across platforms.</li>
          <li>✔️ Reduces manual work for IT administrators.</li>
          <li>✔️ Supports secure and scalable identity management.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">📘 SCIM 2.0 Overview</h2>
        <p className="mb-4 text-blue-100 leading-relaxed">
          SCIM 2.0 is the latest version of the protocol, defined in RFC 7643 and RFC 7644. It includes standardized schemas for Users and Groups, and provides CRUD operations via HTTP methods. Some key endpoints in a SCIM-compliant service are:
        </p>
        <ul className="list-disc list-inside mb-6 text-blue-100 leading-relaxed">
          <li><code>GET /Users</code> – List or search users</li>
          <li><code>POST /Users</code> – Create a new user</li>
          <li><code>PUT /Users/{'{userId}'}</code> – Replace user attributes</li>
          <li><code>PATCH /Users/{'{userId}'}</code> – Update specific attributes</li>
          <li><code>DELETE /Users/{'{userId}'}</code> – Remove a user</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">🧱 SCIM User Resource Example</h2>
        <pre className="bg-blue-950 text-blue-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
{`{
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
}`}
        </pre>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">🔐 Authentication</h2>
        <p className="mb-4 text-blue-100 leading-relaxed">
          SCIM APIs are typically secured using OAuth 2.0 bearer tokens. You can authenticate requests by sending the token in the
          `Authorization` header:
        </p>
        <pre className="bg-blue-950 text-blue-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
{`Authorization: Bearer YOUR_ACCESS_TOKEN`}
        </pre>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">💡 Use Case in the Real World</h2>
        <p className="mb-4 text-blue-100 leading-relaxed">
          In one of my projects at JP Morgan, I implemented SCIM 2.0 APIs to automate user onboarding across internal systems.
          This reduced manual ticket-based provisioning by 65%, enhanced data consistency, and enabled real-time deprovisioning for compliance.
        </p>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">📦 Tools & Libraries</h2>
        <ul className="list-disc list-inside text-blue-100 leading-relaxed">
          <li><strong>Java/Spring:</strong> <code>spring-scim2</code>, custom REST controllers</li>
          <li><strong>Node.js:</strong> <code>scimify</code>, <code>express-scim</code></li>
          <li><strong>Testing:</strong> Postman, Insomnia, curl</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-200 mb-4 mt-8">📌 Conclusion</h2>
        <p className="text-blue-100 leading-relaxed">
          SCIM streamlines identity management in modern applications. If you're building SaaS products or managing users across systems, SCIM 2.0
          is a must-know protocol. With a bit of setup, it can save hours of manual provisioning and ensure secure, scalable identity automation.
        </p>
      </div>
    </div>
  );
}
