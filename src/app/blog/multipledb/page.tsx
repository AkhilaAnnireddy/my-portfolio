"use client";

import { motion } from "framer-motion";

export default function SpringDBSwitchingBlog() {
  return (
    <div className="min-h-screen bg-black text-blue-200 py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-400 mb-3 text-center">
          Runtime Database Switching in Spring Boot for Multi-Tenant Apps
        </h1>
        <p className="text-blue-400 text-sm text-center mb-12">
          April 20, 2025 • Akhila Annireddy
        </p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-lg text-blue-100 leading-relaxed"
        >
          As modern applications scale, supporting multiple clients (tenants)
          with isolated data becomes crucial. One efficient strategy is dynamic
          or runtime database switching in Spring Boot—where a single UI serves
          multiple tenants, but each tenant&apos;s data resides in a separate
          database.
        </motion.p>

        {/* Multi-Tenancy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            What is Multi-Tenancy?
          </h2>
          <p className="text-blue-100 leading-relaxed">
            Multi-tenancy is an architectural pattern where a single application
            instance serves multiple customers (tenants), each with its own
            database or schema. It enhances scalability, customization, and data
            isolation.
          </p>
        </section>

        {/* Approaches */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            Common Approaches
          </h2>
          <ul className="list-disc list-inside text-blue-100 space-y-2 leading-relaxed">
            <li>Single Database, Shared Schema (with tenant column)</li>
            <li>Single Database, Separate Schemas per tenant</li>
            <li>
              <strong>
                Multiple Databases (Recommended for full isolation)
              </strong>
            </li>
          </ul>
        </section>

        {/* Runtime Switching */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            How Runtime Switching Works
          </h2>
          <p className="text-blue-100 leading-relaxed">
            In a multi-database setup, each tenant is associated with a
            different <code>DataSource</code>. When a request is made, the app
            dynamically routes to the correct <code>DataSource</code> based on a
            tenant identifier (from headers, JWT token, etc).
          </p>
        </section>

        {/* Implementation Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            Implementation Steps
          </h2>
          <ol className="list-decimal list-inside text-blue-100 space-y-2 leading-relaxed">
            <li>
              Create a <code>TenantContext</code> to hold the current tenant
              identifier.
            </li>
            <li>
              Use an interceptor or filter to extract the tenant ID from the
              request and set it in <code>TenantContext</code>.
            </li>
            <li>
              Configure a <code>RoutingDataSource</code> class extending{" "}
              <code>AbstractRoutingDataSource</code> to switch based on the
              tenant.
            </li>
            <li>
              Initialize a <code>Map&lt;String, DataSource&gt;</code> and load
              tenant DBs from config or dynamically.
            </li>
          </ol>
        </section>

        {/* Sample Code */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🛠️ Sample RoutingDataSource
          </h2>
          <pre className="bg-gray-900 text-blue-100 p-5 rounded-xl text-sm overflow-x-auto border border-blue-900/50 shadow-lg">
            {`public class TenantRoutingDataSource extends AbstractRoutingDataSource {
    @Override
    protected Object determineCurrentLookupKey() {
        return TenantContext.getCurrentTenant();
    }
}`}
          </pre>
        </section>

        {/* Real-World Use Case */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            Real-World Use Case
          </h2>
          <p className="text-blue-100 leading-relaxed">
            At JP Morgan, I implemented dynamic tenant routing to support
            internal tools that required strict data segregation. This helped us
            onboard new clients faster without compromising existing
            configurations.
          </p>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Conclusion
          </h2>
          <p className="text-blue-100 leading-relaxed">
            Runtime database switching empowers SaaS applications to scale
            efficiently while maintaining full tenant data isolation. With
            Spring Boot&apos;s flexibility, it&apos;s easier than ever to
            architect robust multi-tenant systems.
          </p>
        </section>
      </div>
    </div>
  );
}
