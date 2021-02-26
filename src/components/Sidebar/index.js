import React from "react";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./styles";
import {
  FiberManualRecord,
  Create,
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import db from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Sidebar = () => {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2> Joao Almeida Slack </h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />
      {channels?.docs.map((channel) => (
        <SidebarOption
          key={channel.id}
          id={channel.id}
          title={channel.data().name}
        />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
