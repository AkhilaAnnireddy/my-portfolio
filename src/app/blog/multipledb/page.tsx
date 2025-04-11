export default function SpringDBSwitchingBlog() {
    return (
      <div className="min-h-screen px-6 py-12 bg-gradient-to-b from-black via-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Runtime Database Switching in Spring Boot for Multi-Tenant Apps
          </h1>
          <p className="text-blue-300 text-sm mb-6">
            April 20, 2025 • Akhila Annireddy
          </p>
  
          <p className="mb-4 text-lg leading-relaxed text-blue-100">
            As modern applications scale, supporting multiple clients (tenants) with isolated data becomes crucial. One efficient strategy is dynamic or runtime database switching in Spring Boot—where a single UI serves multiple tenants, but each tenant's data resides in a separate database.
          </p>
  
          <h2 className="text-2xl font-semibold text-blue-200 mb-2">🔄 What is Multi-Tenancy?</h2>
          <p className="mb-4 text-blue-100">
            Multi-tenancy is an architectural pattern where a single application instance serves multiple customers (tenants), each with its own database or schema. It enhances scalability, customization, and data isolation.
          </p>
  
          <h2 className="text-2xl font-semibold text-blue-200 mb-2">🧠 Common Approaches</h2>
          <ul className="list-disc list-inside mb-4 text-blue-100">
            <li>Single Database, Shared Schema (with tenant column)</li>
            <li>Single Database, Separate Schemas per tenant</li>
            <li><strong>Multiple Databases (Recommended for full isolation)</strong></li>
          </ul>
  
          <h2 className="text-2xl font-semibold text-blue-200 mb-2">⚙️ How Runtime Switching Works</h2>
          <p className="mb-4 text-blue-100">
            In a multi-database setup, each tenant is associated with a different `DataSource`. When a request is made, the app dynamically routes to the correct `DataSource` based on a tenant identifier (from headers, JWT token, etc).
          </p>
  
          <h2 className="text-2xl font-semibold text-blue-200 mb-2">🏗️ Implementation Steps</h2>
          <ol className="list-decimal list-inside mb-6 text-blue-100">
            <li>Create a `TenantContext` to hold the current tenant identifier.</li>
            <li>Use an interceptor or filter to extract the tenant ID from the request and set it in `TenantContext`.</li>
            <li>Configure a `RoutingDataSource` class extending `AbstractRoutingDataSource` to switch based on the tenant.</li>
            <li>Initialize a `Map String, DataSource` and load tenant DBs from config or dynamically.</li>
          </ol>
  
          <h2 className="text-2xl font-semibold text-blue-200 mb-2">🛠️ Sample RoutingDataSource</h2>
          <pre className="bg-blue-950 text-blue-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
  {`public class TenantRoutingDataSource extends AbstractRoutingDataSource {
    @Override
    protected Object determineCurrentLookupKey() {
      return TenantContext.getCurrentTenant();
    }
  }`}
          </pre>
  
          <h2 className="text-2xl font-semibold text-blue-200 mb-2">🚀 Real-World Use Case</h2>
          <p className="mb-4 text-blue-100">
            At JP Morgan, I implemented dynamic tenant routing to support internal tools that required strict data segregation. This helped us onboard new clients faster without compromising existing configurations.
          </p>
  
          <h2 className="text-2xl font-semibold text-blue-200 mb-4">📌 Conclusion</h2>
          <p className="text-blue-100">
            Runtime database switching empowers SaaS applications to scale efficiently while maintaining full tenant data isolation. With Spring Boot's flexibility, it's easier than ever to architect robust multi-tenant systems.
          </p>
        </div>
      </div>
    );
  }
  