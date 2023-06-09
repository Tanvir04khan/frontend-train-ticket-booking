import React, { useContext } from "react";
import { Box, Container, Typography, colors } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import TicketTile from "../components/TicketTile";
import TicketsContext from "../context/TicketsContext/TicketsContext";

const CancelTicketScreen = () => {
  const ticketContext = useContext(TicketsContext);

  const tickets = ticketContext.userTickets;

  const activeTickets = tickets.filter(
    (ticket) =>
      Date.parse(ticket.expire_date as string) >
      Date.parse(new Date().toISOString())
  );

  return (
    <Box>
      <ResponsiveAppBar />
      <Container component="main" maxWidth="xs">
        <Typography
          sx={{
            mt: "1rem",
            p: "0.5rem",
            pl: "1rem",
            background: colors.blue[700],
            color: "#ffffff",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ConfirmationNumberIcon sx={{ mr: "1rem" }} />
          Cancel Ticket
        </Typography>
        {activeTickets.map((ticket) => (
          <TicketTile key={ticket.ticket_id} ticket={ticket} />
        ))}
        {!activeTickets.length && (
          <Box
            mt="2rem"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="caption">
              No Active Ticket Available.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CancelTicketScreen;
