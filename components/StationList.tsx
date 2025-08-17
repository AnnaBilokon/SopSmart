import { DropOffStation } from "@/types/waste";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Navigation } from "lucide-react";

interface StationListProps {
  stations: DropOffStation[];
  language?: "en" | "sv";
}

const StationList = ({ stations, language = "en" }: StationListProps) => {
  if (!stations.length) return null;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        {language === "sv"
          ? "Avlämningsställen i närheten"
          : "Nearby drop-off locations"}
      </h3>

      {stations.map((station) => (
        <Card
          key={station.id}
          className="bg-card border-border/50 hover:shadow-soft transition-all duration-200"
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-foreground">
                    {station.name}
                  </h4>
                  {station.distance && (
                    <Badge variant="secondary" className="text-xs">
                      {station.distance.toFixed(1)} km
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{station.address}</span>
                </div>

                {station.opening_hours && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{station.opening_hours}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1">
                  {station.types.map((type) => (
                    <Badge key={type} variant="outline" className="text-xs">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                  <Navigation className="h-4 w-4" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StationList;
