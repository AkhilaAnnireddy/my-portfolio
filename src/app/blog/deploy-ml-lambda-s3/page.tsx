"use client";

import { motion } from "framer-motion";

export default function DeployMLLambdaS3Article() {
  return (
    <div className="min-h-screen bg-black text-blue-200 py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-400 mb-3 text-center">
          Deploying Machine Learning Models Using AWS Lambda and S3
        </h1>
        <p className="text-blue-400 text-sm text-center mb-12">
          April 11, 2025 • Akhila Annireddy
        </p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-lg text-blue-100 leading-relaxed"
        >
          Deploying machine learning models in production often requires
          scalability, low cost, and ease of integration with existing systems.
          AWS Lambda and Amazon S3 together provide a powerful serverless
          combination to achieve exactly that. By using Lambda’s event-driven
          architecture and S3’s storage triggers, you can create efficient
          inference pipelines without worrying about provisioning servers.
        </motion.p>

        {/* Section: Why Serverless */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            ⚡ Why Serverless for ML?
          </h2>
          <ul className="list-disc list-inside text-blue-100 space-y-2 leading-relaxed">
            <li>✔️ Pay only for compute when your model is invoked.</li>
            <li>✔️ Automatically scale based on incoming requests.</li>
            <li>✔️ Easy integration with S3 events, APIs, and queues.</li>
            <li>✔️ No infrastructure management overhead.</li>
          </ul>
        </section>

        {/* Section: Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            🛠️ Architecture Overview
          </h2>
          <p className="text-blue-100 mb-3 leading-relaxed">
            A common setup involves:
          </p>
          <ul className="list-disc list-inside text-blue-100 space-y-2 leading-relaxed">
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
              Results are stored back in another S3 bucket or pushed to a
              database / downstream API.
            </li>
          </ul>
        </section>

        {/* Section: Packaging */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            Packaging Models for Lambda
          </h2>
          <p className="text-blue-100 mb-3 leading-relaxed">
            Since Lambda has resource limits (memory, package size, execution
            time), there are two main approaches:
          </p>
          <ul className="list-disc list-inside text-blue-100 space-y-2 leading-relaxed">
            <li>
              <strong>ZIP deployment:</strong> Package lightweight models and
              code within the Lambda deployment ZIP (must be &lt; 250 MB
              uncompressed).
            </li>
            <li>
              <strong>Container image:</strong> For larger models, build a
              Docker image with dependencies and push it to Amazon ECR. Lambda
              can run functions from these images (up to 10 GB).
            </li>
          </ul>
        </section>

        {/* Section: Sample Code */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            Sample Inference Code (Python)
          </h2>
          <pre className="bg-gray-900 text-blue-100 p-5 rounded-xl text-sm overflow-x-auto border border-blue-900/50 shadow-lg">
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
        </section>

        {/* Section: Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            Security Considerations
          </h2>
          <ul className="list-disc list-inside text-blue-100 space-y-2 leading-relaxed">
            <li>
              Use <strong>IAM roles</strong> with least-privilege access for
              your Lambda.
            </li>
            <li>
              Encrypt models and results in S3 with{" "}
              <strong>KMS-managed keys</strong>.
            </li>
            <li>
              Enable <strong>logging & monitoring</strong> with CloudWatch.
            </li>
          </ul>
        </section>

        {/* Section: Use Case */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            Real-World Use Case
          </h2>
          <p className="text-blue-100 leading-relaxed">
            In one of my projects, I built a serverless inference pipeline for
            video transcription. Faster-Whisper ASR models were containerized
            and deployed on Lambda with S3 event triggers. This enabled
            real-time transcription at scale with minimal cost—cutting manual
            processing by 70%.
          </p>
        </section>

        {/* Section: Conclusion */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Conclusion
          </h2>
          <p className="text-blue-100 leading-relaxed">
            Deploying ML models with AWS Lambda and S3 provides a
            cost-effective, scalable solution for production workloads. Whether
            you’re handling text, images, or video, the serverless approach
            reduces operational complexity and accelerates delivery. With
            container support, even large ML models can now run seamlessly in
            Lambda.
          </p>
        </section>
      </div>
    </div>
  );
}
