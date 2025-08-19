import { Material } from "@/types/waste";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trash2,
  Battery,
  Recycle,
  Home,
  MapPin,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

interface ResultCardProps {
  material: Material;
  language?: "en" | "sv";
  showStations?: boolean;
}

const getIcon = (category: string) => {
  switch (category) {
    case "household_waste":
      return <Trash2 className="h-8 w-8" />;
    case "hazardous_waste":
      return <Battery className="h-8 w-8" />;
    case "recyclable":
      return <Recycle className="h-8 w-8" />;
    default:
      return <Trash2 className="h-8 w-8" />;
  }
};

const getConfidenceColor = (confidence: number = 1) => {
  if (confidence >= 0.8) return "text-success";
  if (confidence >= 0.6) return "text-warning";
  return "text-destructive";
};

const ResultCard = ({
  material,
  language = "en",
  showStations = false,
}: ResultCardProps) => {
  const homeBin = language === "sv" ? material.home_bin_sv : material.home_bin;
  const instructions =
    language === "sv" ? material.instructions_sv : material.instructions;

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-card shadow-card border-border/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            {getIcon(material.category)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-foreground">
                {homeBin || "Special disposal required"}
              </h3>
              {material.confidence && (
                <Badge
                  variant="outline"
                  className={getConfidenceColor(material.confidence)}
                >
                  {Math.round(material.confidence * 100)}% match
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {material.at_home ? (
                <div className="flex items-center gap-1">
                  <Home className="h-4 w-4" />
                  <span>Home disposal</span>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Drop-off required</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          {instructions.map((instruction, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 mt-1 text-success flex-shrink-0" />
              <span className="text-sm text-foreground">{instruction}</span>
            </div>
          ))}

          {showStations && material.show_stations && (
            <div className="mt-4 p-3 bg-accent/50 rounded-lg border border-accent">
              <div className="flex items-center gap-2 text-sm font-medium text-accent-foreground">
                <MapPin className="h-4 w-4" />
                <span>
                  {language === "sv"
                    ? `Närmaste avlämningsställen för ${material.names[0]}`
                    : `Nearest drop-off points for ${material.names[0]}`}
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
