import { Link } from "react-router-dom";
import {
  Shield,
  Bell,
  MapPin,
  Clock,
  AlertTriangle,
  Activity,
  Users,
  Camera,
  TrendingUp,
  Eye,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/react-app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { Progress } from "@/react-app/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/react-app/components/ui/table";
import { Badge } from "@/react-app/components/ui/badge";

const liveDetection = {
  matchStatus: "Potential Match Found",
  location: "Central Station - Camera 001",
  time: "14:32:05",
  confidence: 87,
  riskLevel: "high",
  personName: "John Doe",
  caseId: "MP-2024-0842",
};

const highRiskZones = [
  { id: 1, name: "Downtown Transit Hub", riskScore: 92, incidents: 12, status: "critical" },
  { id: 2, name: "Industrial District", riskScore: 78, incidents: 8, status: "high" },
  { id: 3, name: "Night Market Area", riskScore: 65, incidents: 5, status: "medium" },
  { id: 4, name: "Harbor District", riskScore: 54, incidents: 3, status: "medium" },
];

const detectionHistory = [
  { id: 1, caseId: "MP-2024-0842", name: "John Doe", location: "Central Station", confidence: 87, status: "investigating" },
  { id: 2, caseId: "MP-2024-0839", name: "Sarah Miller", location: "City Mall", confidence: 92, status: "confirmed" },
  { id: 3, caseId: "MP-2024-0835", name: "Michael Chen", location: "Airport T2", confidence: 73, status: "dismissed" },
  { id: 4, caseId: "MP-2024-0831", name: "Emily Johnson", location: "Bus Depot", confidence: 95, status: "confirmed" },
  { id: 5, caseId: "MP-2024-0828", name: "David Wilson", location: "Park Avenue", confidence: 68, status: "investigating" },
];

const stats = [
  { label: "Active Cases", value: "24", icon: Users, trend: "+3 today" },
  { label: "Live Cameras", value: "156", icon: Camera, trend: "98% online" },
  { label: "Detections Today", value: "42", icon: Eye, trend: "+12 vs yesterday" },
  { label: "Avg Response Time", value: "4.2m", icon: Clock, trend: "-0.8m improved" },
];

function getRiskColor(level: string) {
  switch (level) {
    case "critical":
      return "bg-red-500";
    case "high":
      return "bg-orange-500";
    case "medium":
      return "bg-yellow-500";
    default:
      return "bg-green-500";
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case "confirmed":
      return <Badge className="bg-green-100 text-green-700">Confirmed</Badge>;
    case "investigating":
      return <Badge className="bg-blue-100 text-blue-700">Investigating</Badge>;
    case "dismissed":
      return <Badge className="bg-gray-100 text-gray-600">Dismissed</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold">Guardian AI</h1>
              <p className="text-xs text-muted-foreground">Missing Person Surveillance</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link to="/cctv" className="text-sm text-muted-foreground hover:text-foreground">
            CCTV Monitor
          </Link>

            <Button size="sm" variant="outline" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                3
              </span>
            </Button>

          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-6">Surveillance Dashboard</h1>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-5 flex justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> {stat.trend}
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* LIVE DETECTION */}
        <Card className="border-l-4 border-orange-500 mb-8">
          <CardHeader>
            <CardTitle>Live Detection Alert</CardTitle>
            <p className="text-sm text-muted-foreground">Case ID: {liveDetection.caseId}</p>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2 text-sm">
              <p><strong>Person:</strong> {liveDetection.personName}</p>
              <p><strong>Location:</strong> {liveDetection.location}</p>
              <p><strong>Time:</strong> {liveDetection.time}</p>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Confidence</span>
                <span className="font-bold">{liveDetection.confidence}%</span>
              </div>
              <Progress value={liveDetection.confidence} />
            </div>
          </CardContent>
        </Card>

        {/* HISTORY */}
        <Card>
          <CardHeader>
            <CardTitle>Detection History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Case</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Confidence</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {detectionHistory.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell className="font-mono">{d.caseId}</TableCell>
                    <TableCell>{d.name}</TableCell>
                    <TableCell>{d.confidence}%</TableCell>
                    <TableCell>{getStatusBadge(d.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © 2024 Guardian AI — Government Surveillance Initiative
      </footer>
    </div>
  );
}