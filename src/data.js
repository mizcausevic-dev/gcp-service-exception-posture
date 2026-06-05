export const snapshot = {
  platform: "GCP",
  title: "GCP Service Exception Posture",
  domain: "Cloud governance",
  boardQuestion: "Which GCP exceptions expose data, budget, or perimeter controls before the next board review?",
  liveSurface: "https://gcp.kineticgain.com/",
  signals: [
  {
    "Confidence": 91,
    "Owner": "Platform engineering",
    "Recoverable": 18000,
    "Severity": 84,
    "Action": "Expire temporary egress and bind workload identity to approved service accounts",
    "Name": "Cloud Run egress exception",
    "Area": "network"
  },
  {
    "Confidence": 88,
    "Owner": "Data platform",
    "Recoverable": 12000,
    "Severity": 76,
    "Action": "Attach export job to approved VPC Service Controls perimeter",
    "Name": "BigQuery export perimeter gap",
    "Area": "data"
  },
  {
    "Confidence": 82,
    "Owner": "Cloud finance",
    "Recoverable": 9000,
    "Severity": 62,
    "Action": "Assign budget alerts to service owner and escalation rota",
    "Name": "Budget alert owner drift",
    "Area": "finops"
  }
]
};
