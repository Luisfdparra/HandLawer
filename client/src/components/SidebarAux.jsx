import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  InboxIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  RectangleStackIcon, ArrowRightOnRectangleIcon
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export const SidebarAux = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          HANDLAWYER APP
        </Typography>
      </div>
      <List>
       
        <Link to={"gestionInd"}>
          <ListItem>
            <ListItemPrefix>
              <ClipboardDocumentListIcon className="h-5 w-5" />
            </ListItemPrefix>
            Gestion Indemnizaciones
          </ListItem>
        </Link>

        <Link to={"/"}>
          <ListItem >
            <ListItemPrefix>
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Logout
          </ListItem>
        </Link>
      </List>
    </Card>
  );
};
