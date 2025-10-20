export default function DeployMLLambdaS3Article() {
  return (
    <div className="min-h-screen px-6 py-12 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Deploying Machine Learning Models Using AWS Lambda and S3
        </h1>
        <p className="text-blue-300 text-sm mb-6">
          April 11, 2025 • Akhila Annireddy
        </p>

        <p className="mb-6 text-lg text-blue-100 leading-relaxed">
          Deploying machine learning models in production often requires
          scalability, low cost, and ease of integration with existing systems.
          AWS Lambda and Amazon S3 together provide a powerful serverless
          combination to achieve exactly that. By using Lambda’s event-driven
          architecture and S3’s storage triggers, you can create efficient
          inference pipelines without worrying about provisioning servers.
        </p>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">
          ⚡ Why Serverless for ML?
        </h2>
        <ul className="list-disc list-inside mb-6 text-blue-100 leading-relaxed">
          <li>✔️ Pay only for compute when your model is invoked.</li>
          <li>✔️ Automatically scale based on incoming requests.</li>
          <li>✔️ Easy integration with S3 events, APIs, and queues.</li>
          <li>✔️ No infrastructure management overhead.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">
          🛠️ Architecture Overview
        </h2>
        <p className="mb-4 text-blue-100 leading-relaxed">
          A common setup involves:
        </p>
        <ul className="list-disc list-inside mb-6 text-blue-100 leading-relaxed">
          <li>
            Storing the trained ML model (e.g., PyTorch, TensorFlow) in an{" "}
            <strong>S3 bucket</strong>.
          </li>
          <li>
            Configuring an <strong>S3 event trigger</strong> that invokes a{" "}
            <strong>Lambda function</strong> when a file (e.g., input data) is
            uploaded.
          </li>
          <li>
            The Lambda function loads the model (either from S3 or a container
            image) and runs inference.
          </li>
          <li>
            Results are stored back in another S3 bucket or pushed to a database
            / downstream API.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">
          📦 Packaging Models for Lambda
        </h2>
        <p className="mb-4 text-blue-100 leading-relaxed">
          Since Lambda has resource limits (memory, package size, execution
          time), there are two main approaches:
        </p>
        <ul className="list-disc list-inside text-blue-100 leading-relaxed mb-6">
          <li>
            <strong>ZIP deployment:</strong> Package lightweight models and code
            within the Lambda deployment ZIP (must be &lt; 250 MB uncompressed).
          </li>
          <li>
            <strong>Container image:</strong> For larger models, build a Docker
            image with dependencies and push it to Amazon ECR. Lambda can run
            functions from these images (up to 10 GB).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">
          🔑 Sample Inference Code (Python)
        </h2>
        <pre className="bg-blue-950 text-blue-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
          {`import boto3
  import json
  import torch
  from model import MyModel
  
  s3 = boto3.client("s3")
  model = None
  
  def load_model():
      global model
      if model is None:
          # Load model from S3
          s3.download_file("ml-model-bucket", "model.pt", "/tmp/model.pt")
          model = MyModel()
          model.load_state_dict(torch.load("/tmp/model.pt"))
          model.eval()
  
  def lambda_handler(event, context):
      load_model()
      bucket = event["Records"][0]["s3"]["bucket"]["name"]
      key = event["Records"][0]["s3"]["object"]["key"]
  
      # Download input data
      s3.download_file(bucket, key, "/tmp/input.json")
      with open("/tmp/input.json") as f:
          data = json.load(f)
  
      # Run inference
      result = model.predict(data)
  
      # Save results
      s3.put_object(
          Bucket="ml-results-bucket",
          Key=f"results/{key}.json",
          Body=json.dumps(result)
      )
  
      return {"statusCode": 200, "body": "Inference complete"}`}
        </pre>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">
          🔐 Security Considerations
        </h2>
        <ul className="list-disc list-inside text-blue-100 leading-relaxed mb-6">
          <li>
            Use <strong>IAM roles</strong> with least-privilege access for your
            Lambda.
          </li>
          <li>
            Encrypt models and results in S3 with{" "}
            <strong>KMS-managed keys</strong>.
          </li>
          <li>
            Enable <strong>logging & monitoring</strong> with CloudWatch.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-200 mb-2">
          💡 Real-World Use Case
        </h2>
        <p className="mb-4 text-blue-100 leading-relaxed">
          In one of my projects, I built a serverless inference pipeline for
          video transcription. Faster-Whisper ASR models were containerized and
          deployed on Lambda with S3 event triggers. This enabled real-time
          transcription at scale with minimal cost—cutting manual processing by
          70%.
        </p>

        <h2 className="text-2xl font-semibold text-blue-200 mb-4 mt-8">
          📌 Conclusion
        </h2>
        <p className="text-blue-100 leading-relaxed">
          Deploying ML models with AWS Lambda and S3 provides a cost-effective,
          scalable solution for production workloads. Whether you’re handling
          text, images, or video, the serverless approach reduces operational
          complexity and accelerates delivery. With container support, even
          large ML models can now run seamlessly in Lambda.
        </p>
      </div>
    </div>
  );
}
