import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 88px);
  display: flex;
  background: #ffffff;
  overflow: hidden;
  color: #111827;
`;

export const ConversationSidebar = styled.aside`
  width: 350px;
  min-width: 350px;
  height: 100%;
  padding: 22px 18px;
  box-sizing: border-box;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  overflow-y: auto;

  @media (max-width: 900px) {
    width: 290px;
    min-width: 290px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const ConversationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const ConversationTitle = styled.h2`
  margin: 0;
  color: #111827;
  font-size: 21px;
  font-weight: 700;
`;

export const NewChatButton = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  color: #5b3df5;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #7c3aed;
  }
`;

export const ConversationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface ConversationItemProps {
  $active?: boolean;
}

export const ConversationItem = styled.button<ConversationItemProps>`
  width: 100%;
  padding: 17px 14px;
  box-sizing: border-box;
  border: 1px solid
    ${({ $active }) => ($active ? "#7c5cff" : "#dfe3e8")};
  border-radius: 12px;
  background: ${({ $active }) => ($active ? "#f7f5ff" : "#ffffff")};
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: #8b6cff;
    background: #faf9ff;
  }
`;

export const ConversationName = styled.div`
  color: #111827;
  font-size: 15px;
  line-height: 1.4;
  font-weight: 600;
`;

export const ConversationTime = styled.div`
  margin-top: 5px;
  color: #64748b;
  font-size: 13px;
`;

export const ChatSection = styled.main`
  flex: 1;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
`;

export const ChatHeader = styled.div`
  min-height: 94px;
  padding: 20px 28px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 15px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
`;

export const HeaderIcon = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: linear-gradient(135deg, #6246f5 0%, #a829f5 100%);
`;

export const ChatHeaderContent = styled.div``;

export const ChatTitle = styled.h1`
  margin: 0;
  color: #111827;
  font-size: 25px;
  line-height: 1.25;
  font-weight: 700;
`;

export const ChatSubtitle = styled.p`
  margin: 4px 0 0;
  color: #64748b;
  font-size: 16px;
`;

export const ChatContent = styled.div`
  flex: 1;
  min-height: 0;
  padding: 30px 40px;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const WelcomeContainer = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WelcomeIcon = styled.div`
  width: 94px;
  height: 94px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: linear-gradient(135deg, #6547f7 0%, #a31cf4 100%);
  margin-bottom: 30px;
`;

export const WelcomeTitle = styled.h2`
  margin: 0;
  color: #111827;
  font-size: 29px;
  line-height: 1.3;
  font-weight: 700;
  text-align: center;
`;

export const WelcomeDescription = styled.p`
  max-width: 780px;
  margin: 16px 0 36px;
  color: #64748b;
  font-size: 18px;
  line-height: 1.55;
  text-align: center;
`;

export const SuggestionsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const SuggestionButton = styled.button`
  width: 100%;
  min-height: 62px;
  padding: 16px 18px;
  box-sizing: border-box;
  border: 1px solid #dfe3e8;
  border-radius: 12px;
  background: #ffffff;
  color: #111827;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: #7c5cff;
    background: #faf9ff;
    transform: translateY(-1px);
  }
`;

export const MessagesContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

interface MessageBubbleProps {
  $user?: boolean;
}

export const MessageRow = styled.div<MessageBubbleProps>`
  display: flex;
  justify-content: ${({ $user }) => ($user ? "flex-end" : "flex-start")};
`;

export const MessageBubble = styled.div<MessageBubbleProps>`
  max-width: 72%;
  padding: 14px 17px;
  border-radius: ${({ $user }) =>
    $user ? "16px 16px 4px 16px" : "16px 16px 16px 4px"};
  background: ${({ $user }) => ($user ? "#6547f7" : "#ffffff")};
  color: ${({ $user }) => ($user ? "#ffffff" : "#1f2937")};
  border: ${({ $user }) => ($user ? "none" : "1px solid #e5e7eb")};
  font-size: 15px;
  line-height: 1.6;
  box-shadow: ${({ $user }) =>
    $user ? "none" : "0 2px 5px rgba(15, 23, 42, 0.05)"};
`;

export const ChatFooter = styled.div`
  padding: 18px 48px 14px;
  box-sizing: border-box;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
`;

export const InputContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const MessageInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 58px;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  outline: none;
  background: #ffffff;
  color: #111827;
  font-size: 16px;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #7557f7;
    box-shadow: 0 0 0 3px rgba(117, 87, 247, 0.1);
  }
`;

export const SendButton = styled.button`
  width: 78px;
  height: 58px;
  min-width: 78px;
  border: 0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: linear-gradient(135deg, #6047f6 0%, #a719f5 100%);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 15px rgba(99, 71, 246, 0.25);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
    transform: none;
    box-shadow: none;
  }
`;

export const Disclaimer = styled.p`
  margin: 10px 0 0;
  color: #64748b;
  font-size: 12px;
  text-align: center;
`;