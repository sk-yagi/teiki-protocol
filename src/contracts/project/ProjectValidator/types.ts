import { helios } from "../../program";

export const hlProjectValidatorTypesSource = helios`
  module project_validator_types

  enum ProjectStatus {
    Active
    PreClosed{ pending_until: Time }
    PreDelisted{ pending_until: Time }
    Closed
    Delisted
  }

  struct Datum {
    project_id: ByteArray
    owner_address: Address
    status: ProjectStatus
    milestone_reached: Int
    is_staking_delegation_managed_by_protocol: Bool
  }

  enum Redeemer {
    RecordNewMilestone { new_milestone: Int }
    AllocateStakingValidator { new_staking_validator: StakingValidatorHash }
    UpdateStakingDelegationManagement
    InitiateClose
    InitiateDelist
    CancelDelist
    FinalizeClose
    FinalizeDelist
    Migrate
  }
`;
