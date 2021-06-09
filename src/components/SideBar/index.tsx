import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeFill,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink href="/users" icon={RiContactsLine}>Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink href="/forms" icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink href="/automation" icon={RiGitMergeFill}>Automação</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
