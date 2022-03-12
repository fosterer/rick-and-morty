import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const IndexBody = () => {
  const [active, setActive] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActive(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={active}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Characters"
            {...a11yProps(0)}
            className="text-slate-300"
          />
          <Tab label="Episodes" {...a11yProps(1)} className="text-slate-300" />
          <Tab label="Locations" {...a11yProps(2)} className="text-slate-300" />
        </Tabs>
      </Box>
      <TabPanel value={active} index={0}>
        Characters
      </TabPanel>
      <TabPanel value={active} index={1}>
        Episodes
      </TabPanel>
      <TabPanel value={active} index={2}>
        Locations
      </TabPanel>
    </Box>
  );
};
