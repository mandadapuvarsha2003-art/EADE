import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Send, Sparkles } from "lucide-react";


import {
    ChatContent,
    ChatFooter,
    ChatHeader,
    ChatHeaderContent,
    ChatSection,
    ChatSubtitle,
    ChatTitle,
    ConversationHeader,
    ConversationItem,
    ConversationList,
    ConversationName,
    ConversationSidebar,
    ConversationTime,
    ConversationTitle,
    Disclaimer,
    HeaderIcon,
    InputContainer,
    MessageBubble,
    MessageInput,
    MessageRow,
    MessagesContainer,
    NewChatButton,
    PageContainer,
    SendButton,
    SuggestionButton,
    SuggestionsGrid,
    WelcomeContainer,
    WelcomeDescription,
    WelcomeIcon,
    WelcomeTitle,
} from "./useAiAssistantStyle";

interface Conversation {
    id: number;
    title: string;
    time: string;
}

interface Message {
    id: number;
    text: string;
    sender: "user" | "assistant";
}

const conversations: Conversation[] = [
    {
        id: 1,
        title: "Vendor termination conditions",
        time: "Today",
    },
    {
        id: 2,
        title: "Annual leave policy comparison",
        time: "Yesterday",
    },
    {
        id: 3,
        title: "Contract renewal clauses",
        time: "2 days ago",
    },
];

const suggestions = [
    "Which contracts expire soon?",
    "Find automatic renewal clauses",
    "Compare vendor agreements",
    "What are our HR policies?",
];

const AIAssistant = () => {
    const [activeConversation, setActiveConversation] =
        useState<number | null>(null);

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState<Message[]>([]);

    const handleNewChat = () => {
        setActiveConversation(null);
        setMessages([]);
        setMessage("");
    };

    const handleConversationClick = (id: number) => {
        setActiveConversation(id);

        setMessages([
            {
                id: Date.now(),
                sender: "assistant",
                text: "This conversation has been selected. Connect your conversation API here to load previous messages.",
            },
        ]);
    };

    const sendMessage = (text: string) => {
        const value = text.trim();

        if (!value) {
            return;
        }

        const userMessage: Message = {
            id: Date.now(),
            text: value,
            sender: "user",
        };

        setMessages((currentMessages) => [
            ...currentMessages,
            userMessage,
        ]);

        setMessage("");

        setTimeout(() => {
            const assistantMessage: Message = {
                id: Date.now() + 1,
                sender: "assistant",
                text: `I found information related to "${value}". Connect your AI API here to return evidence-backed answers and source citations.`,
            };

            setMessages((currentMessages) => [
                ...currentMessages,
                assistantMessage,
            ]);
        }, 600);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        sendMessage(message);
    };

    const handleSuggestionClick = (suggestion: string) => {
        sendMessage(suggestion);
    };

    return (
        <PageContainer>
            <ConversationSidebar>
                <ConversationHeader>
                    <ConversationTitle>
                        Conversations
                    </ConversationTitle>

                    <NewChatButton
                        type="button"
                        onClick={handleNewChat}
                    >
                        New Chat
                    </NewChatButton>
                </ConversationHeader>

                <ConversationList>
                    {conversations.map((conversation) => (
                        <ConversationItem
                            key={conversation.id}
                            type="button"
                            $active={
                                activeConversation === conversation.id
                            }
                            onClick={() =>
                                handleConversationClick(conversation.id)
                            }
                        >
                            <ConversationName>
                                {conversation.title}
                            </ConversationName>

                            <ConversationTime>
                                {conversation.time}
                            </ConversationTime>
                        </ConversationItem>
                    ))}
                </ConversationList>
            </ConversationSidebar>

            <ChatSection>
                <ChatHeader>
                    <HeaderIcon>
                        <Sparkles size={29} strokeWidth={1.9} />
                    </HeaderIcon>

                    <ChatHeaderContent>
                        <ChatTitle>EADE AI Assistant</ChatTitle>

                        <ChatSubtitle>
                            Evidence-backed answers from your documents
                        </ChatSubtitle>
                    </ChatHeaderContent>
                </ChatHeader>

                <ChatContent>
                    {messages.length === 0 ? (
                        <WelcomeContainer>
                            <WelcomeIcon>
                                <Sparkles size={48} strokeWidth={1.8} />
                            </WelcomeIcon>

                            <WelcomeTitle>
                                How can I help you today?
                            </WelcomeTitle>

                            <WelcomeDescription>
                                Ask me anything about your enterprise
                                documents. I'll provide evidence-backed
                                answers with source citations.
                            </WelcomeDescription>

                            <SuggestionsGrid>
                                {suggestions.map((suggestion) => (
                                    <SuggestionButton
                                        key={suggestion}
                                        type="button"
                                        onClick={() =>
                                            handleSuggestionClick(suggestion)
                                        }
                                    >
                                        {suggestion}
                                    </SuggestionButton>
                                ))}
                            </SuggestionsGrid>
                        </WelcomeContainer>
                    ) : (
                        <MessagesContainer>
                            {messages.map((chatMessage) => {
                                const isUser =
                                    chatMessage.sender === "user";

                                return (
                                    <MessageRow
                                        key={chatMessage.id}
                                        $user={isUser}
                                    >
                                        <MessageBubble $user={isUser}>
                                            {chatMessage.text}
                                        </MessageBubble>
                                    </MessageRow>
                                );
                            })}
                        </MessagesContainer>
                    )}
                </ChatContent>

                <ChatFooter>
                    <InputContainer onSubmit={handleSubmit}>
                        <MessageInput
                            type="text"
                            placeholder="Ask anything about your enterprise documents..."
                            value={message}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setMessage(event.target.value)
                            }
                        />

                        <SendButton
                            type="submit"
                            disabled={!message.trim()}
                        >
                            <Send size={26} />
                        </SendButton>
                    </InputContainer>

                    <Disclaimer>
                        EADE provides AI-supported answers. Verify important
                        information with source documents.
                    </Disclaimer>
                </ChatFooter>
            </ChatSection>
        </PageContainer>
    );
};

export default AIAssistant;