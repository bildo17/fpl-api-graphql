/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface BootstrapStatic {
  phases?: {
    id?: number;
    name?: string;
    numWinners?: number;
    startEvent?: number;
    stopEvent?: number;
    [k: string]: any;
  }[];
  elements?: {
    id?: number;
    photo?: string;
    webName?: string;
    teamCode?: number;
    status?: string;
    code?: number;
    firstName?: string;
    secondName?: string;
    squadNumber?: number | null;
    news?: string;
    nowCost?: number;
    newsAdded?: string | null;
    chanceOfPlayingThisRound?: number | null;
    chanceOfPlayingNextRound?: number | null;
    valueForm?: string;
    valueSeason?: string;
    costChangeStart?: number;
    costChangeEvent?: number;
    costChangeStartFall?: number;
    costChangeEventFall?: number;
    inDreamteam?: boolean;
    dreamteamCount?: number;
    selectedByPercent?: string;
    form?: string;
    transfersOut?: number;
    transfersIn?: number;
    transfersOutEvent?: number;
    transfersInEvent?: number;
    loansIn?: number;
    loansOut?: number;
    loanedIn?: number;
    loanedOut?: number;
    totalPoints?: number;
    eventPoints?: number;
    pointsPerGame?: string;
    epThis?: string;
    epNext?: string;
    special?: boolean;
    minutes?: number;
    goalsScored?: number;
    assists?: number;
    cleanSheets?: number;
    goalsConceded?: number;
    ownGoals?: number;
    penaltiesSaved?: number;
    penaltiesMissed?: number;
    yellowCards?: number;
    redCards?: number;
    saves?: number;
    bonus?: number;
    bps?: number;
    influence?: string;
    creativity?: string;
    threat?: string;
    ictIndex?: string;
    eaIndex?: number;
    elementType?: number;
    team?: number;
    [k: string]: any;
  }[];
  stats?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^(+)+$".
     */
    [k: string]: {
      category?: null;
      field?: string;
      abbr?: null;
      label?: string;
      [k: string]: any;
    }[];
  };
  gameSettings?: {
    game?: {
      scoringEaIndex?: number;
      leaguePrefixPublic?: string;
      bpsTackles?: number;
      leagueH2hTiebreak?: string;
      scoringLongPlay?: number;
      bpsRecoveriesLimit?: number;
      facebookAppId?: string;
      bpsTackled?: number;
      bpsErrorsLeadingToGoal?: number;
      bpsYellowCards?: number;
      uiElHideCurrencyQi?: boolean;
      scoringBonus?: number;
      transfersCost?: number;
      defaultFormation?: number[][];
      bpsLongPlay?: number;
      bpsLongPlayLimit?: number;
      scoringAssists?: number;
      scoringLongPlayLimit?: number;
      uiSpecialShirtExclusions?: any[];
      fifaLeagueId?: number;
      leagueSizeClassicMax?: number;
      scoringRedCards?: number;
      scoringCreativity?: number;
      gameTimezone?: string;
      staticGameUrl?: string;
      currencySymbol?: string;
      bpsTargetMissed?: number;
      bpsPenaltiesSaved?: number;
      uiUseSpecialShirts?: boolean;
      supportEmailAddress?: string;
      cupStartEventId?: number;
      scoringPenaltiesSaved?: number;
      scoringThreat?: number;
      scoringSaves?: number;
      leagueJoinPrivateMax?: number;
      scoringShortPlay?: number;
      sysUseEventLiveApi?: boolean;
      scoringConcedeLimit?: number;
      bpsKeyPasses?: number;
      bpsClearancesBlocksInterceptions?: number;
      bpsPassPercentage90?: number;
      bpsBigChancesMissed?: number;
      leagueMaxKoRoundsH2h?: number;
      bpsOpenPlayCrosses?: number;
      leaguePointsH2hWin?: number;
      bpsSaves?: number;
      bpsCbiLimit?: number;
      leagueSizeH2hMax?: number;
      sysViceCaptainEnabled?: boolean;
      squadSquadplay?: number;
      bpsFouls?: number;
      squadSquadsize?: number;
      uiSelectionShortTeamNames?: boolean;
      transfersSellOnFee?: number;
      transfersType?: string;
      scoringIctIndex?: number;
      bpsPassPercentage80?: number;
      bpsOwnGoals?: number;
      scoringYellowCards?: number;
      bpsPassPercentage70?: number;
      uiShowHomeAway?: boolean;
      uiElHideCurrencySy?: boolean;
      bpsAssists?: number;
      squadTeamLimit?: number;
      leaguePointsH2hDraw?: number;
      transfersLimit?: number;
      bpsDribbles?: number;
      bpsOffside?: number;
      sysCdnCacheEnabled?: boolean;
      currencyMultiplier?: number;
      bpsRedCards?: number;
      bpsWinningGoals?: number;
      leagueJoinPublicMax?: number;
      formations?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^(+)+$".
         */
        [k: string]: number[][];
      };
      leaguePointsH2hLose?: number;
      currencyDecimalPlaces?: number;
      bpsErrorsLeadingToGoalAttempt?: number;
      uiSelectionPriceGap?: number;
      bpsBigChancesCreated?: number;
      uiSelectionPlayerLimit?: number;
      bpsAttemptedPassesLimit?: number;
      scoringPenaltiesMissed?: number;
      photoBaseUrl?: string;
      scoringBps?: number;
      scoringInfluence?: number;
      bpsPenaltiesConceded?: number;
      scoringOwnGoals?: number;
      squadTotalSpend?: number;
      bpsShortPlay?: number;
      uiElementWrap?: number;
      bpsRecoveries?: number;
      bpsPenaltiesMissed?: number;
      scoringSavesLimit?: number;
      [k: string]: any;
    };
    elementType?: {
      "1"?: {
        scoringCleanSheets?: number;
        squadMinPlay?: number;
        bpsCleanSheets?: number;
        scoringGoalsConceded?: number;
        scoringGoalsScored?: number;
        squadMaxPlay?: number;
        bpsGoalsScored?: number;
        uiShirtSpecific?: boolean;
        squadSelect?: number;
        subPositionsLocked?: number[];
        [k: string]: any;
      };
      "2"?: {
        scoringCleanSheets?: number;
        squadMinPlay?: number;
        scoringGoalsConceded?: number;
        scoringGoalsScored?: number;
        squadMaxPlay?: number;
        bpsGoalsScored?: number;
        bpsCleanSheets?: number;
        squadSelect?: number;
        [k: string]: any;
      };
      "3"?: {
        scoringCleanSheets?: number;
        squadMinPlay?: number;
        scoringGoalsConceded?: number;
        scoringGoalsScored?: number;
        squadMaxPlay?: number;
        bpsGoalsScored?: number;
        bpsCleanSheets?: number;
        squadSelect?: number;
        [k: string]: any;
      };
      "4"?: {
        scoringCleanSheets?: number;
        squadMinPlay?: number;
        scoringGoalsConceded?: number;
        scoringGoalsScored?: number;
        squadMaxPlay?: number;
        bpsGoalsScored?: number;
        bpsCleanSheets?: number;
        squadSelect?: number;
        [k: string]: any;
      };
      [k: string]: any;
    };
    [k: string]: any;
  };
  currentEvent?: number;
  totalPlayers?: number;
  teams?: {
    id?: number;
    currentEventFixture?: {
      isHome?: boolean;
      day?: number;
      eventDay?: number;
      month?: number;
      id?: number;
      opponent?: number;
      [k: string]: any;
    }[];
    nextEventFixture?: {
      isHome?: boolean;
      day?: number;
      eventDay?: number;
      month?: number;
      id?: number;
      opponent?: number;
      [k: string]: any;
    }[];
    name?: string;
    code?: number;
    shortName?: string;
    unavailable?: boolean;
    strength?: number;
    position?: number;
    played?: number;
    win?: number;
    loss?: number;
    draw?: number;
    points?: number;
    form?: null;
    linkUrl?: string;
    strengthOverallHome?: number;
    strengthOverallAway?: number;
    strengthAttackHome?: number;
    strengthAttackAway?: number;
    strengthDefenceHome?: number;
    strengthDefenceAway?: number;
    teamDivision?: number;
    [k: string]: any;
  }[];
  elementTypes?: {
    id?: number;
    singularName?: string;
    singularNameShort?: string;
    pluralName?: string;
    pluralNameShort?: string;
    [k: string]: any;
  }[];
  lastEntryEvent?: number;
  statsOptions?: {
    name?: string;
    key?: string;
    [k: string]: any;
  }[];
  nextEventFixtures?: {
    id?: number;
    kickoffTimeFormatted?: string;
    started?: boolean;
    eventDay?: number;
    deadlineTime?: string;
    deadlineTimeFormatted?: string;
    stats?: any[];
    code?: number;
    kickoffTime?: string;
    teamHScore?: null;
    teamAScore?: null;
    finished?: boolean;
    minutes?: number;
    provisionalStartTime?: boolean;
    finishedProvisional?: boolean;
    event?: number;
    teamA?: number;
    teamH?: number;
    [k: string]: any;
  }[];
  events?: {
    id?: number;
    name?: string;
    deadlineTime?: string;
    averageEntryScore?: number;
    finished?: boolean;
    dataChecked?: boolean;
    highestScoringEntry?: number | null;
    deadlineTimeEpoch?: number;
    deadlineTimeGameOffset?: number;
    deadlineTimeFormatted?: string;
    highestScore?: number | null;
    isPrevious?: boolean;
    isCurrent?: boolean;
    isNext?: boolean;
    [k: string]: any;
  }[];
  nextEvent?: number;
  [k: string]: any;
}
