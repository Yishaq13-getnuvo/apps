import { GitHub, OfflineBoltOutlined } from "@material-ui/icons";
import { Button, makeStyles } from "@saleor/macaw-ui";
import { actions, useAppBridge } from "@saleor/app-sdk/app-bridge";

import { AppIcon, TitleBar } from "@saleor/apps-shared";

const useStyles = makeStyles({
  buttonsGrid: { display: "flex", gap: 10 },
  topBar: {
    marginBottom: 32,
  },
  indexActions: {
    marginTop: 10,
  },
});

export const SlackAppMainBar = () => {
  const { appBridge } = useAppBridge();
  const styles = useStyles();

  const openInNewTab = (url: string) => {
    appBridge?.dispatch(
      actions.Redirect({
        to: url,
        newContext: true,
      })
    );
  };

  return (
    <TitleBar
      icon={<AppIcon theme={`rgb(95, 58, 199)`} text="S" />}
      className={styles.topBar}
      name="Saleor Slack"
      author="By Saleor Commerce"
      rightColumnContent={
        <div className={styles.buttonsGrid}>
          <Button
            variant="secondary"
            startIcon={<GitHub />}
            onClick={() => {
              openInNewTab("https://github.com/saleor/saleor-app-slack");
            }}
          >
            Repository
          </Button>
          <Button
            startIcon={<OfflineBoltOutlined />}
            variant="secondary"
            onClick={() => {
              openInNewTab("https://github.com/saleor/apps/discussions");
            }}
          >
            Request a feature
          </Button>
        </div>
      }
    />
  );
};
